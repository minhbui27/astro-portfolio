import * as React from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

export type BoundsApi = {
  getSize: () => {
    size: THREE.Vector3
    center: THREE.Vector3
    distance: number
  }
  refresh(object?: THREE.Object3D): any
  clip(): any
  fit(): any
}

export type BoundsProps = JSX.IntrinsicElements['group'] & {
  damping?: number
  fit?: boolean
  clip?: boolean
  margin?: number
  eps?: number
  fixedOrientation?: boolean
}

type ControlsProto = {
  update(): void
  target: THREE.Vector3
  maxDistance: number
  addEventListener: (event: string, callback: (event: any) => void) => void
  removeEventListener: (event: string, callback: (event: any) => void) => void
}

const isOrthographic = (def: THREE.Camera): def is THREE.OrthographicCamera => def && (def as THREE.OrthographicCamera).isOrthographicCamera

const context = React.createContext<BoundsApi>(null!)

export function Bounds({ children, damping = 6, fit, clip, margin = 1.2, eps = 0.01, fixedOrientation = false }: BoundsProps): JSX.Element {
  const ref = React.useRef<THREE.Group>(null!)
  const camera = useThree((state) => state.camera)
  // @ts-expect-error new in @react-three/fiber@7.0.5
  const controls = useThree((state) => state.controls) as ControlsProto
  const invalidate = useThree((state) => state.invalidate)

  function equals(a: THREE.Vector3, b: THREE.Vector3) {
    return Math.abs(a.x - b.x) < eps && Math.abs(a.y - b.y) < eps && Math.abs(a.z - b.z) < eps
  }

  function damp(v: THREE.Vector3, t: THREE.Vector3, lambda: number, delta: number) {
    v.x = THREE.MathUtils.damp(v.x, t.x, lambda, delta)
    v.y = THREE.MathUtils.damp(v.y, t.y, lambda, delta)
    v.z = THREE.MathUtils.damp(v.z, t.z, lambda, delta)
  }

  const [current] = React.useState(() => ({
    animating: false,
    focus: new THREE.Vector3(),
    camera: new THREE.Vector3(),
    zoom: 1,
  }))
  const [goal] = React.useState(() => ({
    focus: new THREE.Vector3(),
    camera: new THREE.Vector3(),
    zoom: 1,
  }))

  const api: BoundsApi = React.useMemo(() => {
    const box = new THREE.Box3()

    function getSize() {
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())
      const maxSize = Math.max(size.x, size.y, size.z)
      const fitHeightDistance = isOrthographic(camera) ? maxSize * 4 : maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360))
      const fitWidthDistance = isOrthographic(camera) ? maxSize * 4 : fitHeightDistance / camera.aspect
      const distance = margin * Math.max(fitHeightDistance, fitWidthDistance)
      return { size, center, distance }
    }

    return {
      getSize,
      refresh(object?: THREE.Object3D) {
        box.setFromObject(object || ref.current)
        return this
      },
      clip() {
        const { distance } = getSize()
        if (controls) {
          controls.maxDistance = distance * 10
        }
        camera.near = distance / 100
        camera.far = distance * 100
        camera.updateProjectionMatrix()
        if (controls) {
          controls.update()
        }
        return this
      },
      fit() {
        current.camera.copy(camera.position)
        if (controls) {
          current.focus.copy(controls.target)
        }

        const { center, distance } = getSize()

        const direction = (fixedOrientation ? camera.getWorldDirection(new THREE.Vector3()) : center.clone().sub(camera.position).normalize()).multiplyScalar(
          distance,
        )

        goal.camera.copy(center).sub(direction)
        goal.focus.copy(center)

        if (isOrthographic(camera)) {
          current.zoom = camera.zoom

          let maxHeight = 0,
            maxWidth = 0
          const vertices = [
            new THREE.Vector3(box.min.x, box.min.y, box.min.z),
            new THREE.Vector3(box.min.x, box.max.y, box.min.z),
            new THREE.Vector3(box.min.x, box.min.y, box.max.z),
            new THREE.Vector3(box.min.x, box.max.y, box.max.z),
            new THREE.Vector3(box.max.x, box.max.y, box.max.z),
            new THREE.Vector3(box.max.x, box.max.y, box.min.z),
            new THREE.Vector3(box.max.x, box.min.y, box.max.z),
            new THREE.Vector3(box.max.x, box.min.y, box.min.z),
          ]
          // Transform the center and each corner to camera space
          center.applyMatrix4(camera.matrixWorldInverse)
          for (const v of vertices) {
            v.applyMatrix4(camera.matrixWorldInverse)
            maxHeight = Math.max(maxHeight, Math.abs(v.y - center.y))
            maxWidth = Math.max(maxWidth, Math.abs(v.x - center.x))
          }
          maxHeight *= 2
          maxWidth *= 2
          const zoomForHeight = (camera.top - camera.bottom) / maxHeight
          const zoomForWidth = (camera.right - camera.left) / maxWidth
          goal.zoom = Math.min(zoomForHeight, zoomForWidth) / margin
          if (!damping) {
            camera.zoom = goal.zoom
            camera.updateProjectionMatrix()
          }
        }

        if (damping) {
          current.animating = true
        } else {
          camera.position.copy(goal.camera)
          camera.lookAt(goal.focus)
          if (controls) {
            controls.target.copy(goal.focus)
            controls.update()
          }
          invalidate()
        }
        return this
      },
    }
  }, [fixedOrientation, current, goal, camera, controls, margin, damping, invalidate])

  React.useLayoutEffect(() => {
    api.refresh()
    if (fit) {
      api.fit()
    }

    if (clip) {
      api.clip()
    }

    if (controls) {
      // Try to prevent drag hijacking
      const callback = () => (current.animating = false)
      controls.addEventListener('start', callback)
      return () => controls.removeEventListener('start', callback)
    }
  }, [clip, current, api, fit, controls])

  useFrame((_state, delta) => {
    if (current.animating) {
      damp(current.focus, goal.focus, damping, delta)
      damp(current.camera, goal.camera, damping, delta)
      current.zoom = THREE.MathUtils.damp(current.zoom, goal.zoom, damping, delta)
      camera.position.copy(current.camera)

      if (isOrthographic(camera)) {
        camera.zoom = current.zoom
        camera.updateProjectionMatrix()
      }

      if (!controls) {
        camera.lookAt(current.focus)
      } else {
        controls.target.copy(current.focus)
        controls.update()
      }

      invalidate()
      if (isOrthographic(camera) && !(Math.abs(current.zoom - goal.zoom) < eps)) {
        return
      }

      if (!isOrthographic(camera) && !equals(current.camera, goal.camera)) {
        return
      }

      if (controls && !equals(current.focus, goal.focus)) {
        return
      }
      current.animating = false
    }
  })

  return (
    <group ref={ref}>
      <context.Provider value={api}>{children}</context.Provider>
    </group>
  )
}

export function useBounds(): BoundsApi {
  return React.useContext(context)
}
