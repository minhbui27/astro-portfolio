import React, { useRef, useEffect, Suspense, useState } from 'react'
import { useInView, motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { ScrollControls, useScroll } from '../helpers/ScrollControls'
import { Stars } from './Welcome'
import { Bounds } from '../helpers/BoundsNoRotation.tsx'
import * as random from 'maath/random/dist/maath-random.esm'

function ScrollingText(props) {
  const ref = useRef()
  const scroll = useScroll()	
  let displacement = 0
	useFrame((state,delta) => {
		const offset = scroll.offset		
		ref.current.position.set(0,Math.sin(offset)*10/Math.sin(1),0);	
	})
  return (
    <group rotation={props.rotation}>
      <group ref={ref} position={[0, 2, 0]}>
        {props.text.split('\n').map((t) => {
          displacement += props.separation
          // console.log(t);
          return (
            <Text
              key={t}
              position={[
                props.position[0],
                props.position[1] - (displacement - props.separation),
                props.position[2],
              ]}
              color='yellow'
              anchorX='center'
              anchorY='middle'
              fontSize='1'
              font='/Univers45Light.otf'
            >
              {t}
            </Text>
          )
        })}
      </group>
    </group>
  )
}
const IntroductionDiv = () => {
  const introText = `Hi, my name is Minh Bui
	I'm currently a student studying 
	Computer Engineering at UCSB
	aaaaaaaaaaaaaaaaaaaaaaaaaaaa
	aaaaaaaaaaaaaaaaaaaaaaaaaaaa
	aaaaaaaaaaaaaaaaaaaaaaaaaaaa
	aaaaaaaaaaaaaaaaaaaaaaaaaaaa
	`
  const ref = useRef(null)
  // const isInView = useInView(ref, {once: false})
  return (
    <AnimatePresence>
      <motion.div
	    id='introduction'
        className='bg-black flex flex-col h-screen'
        ref={ref}
        // initial = {{opacity: 0}}
        // animate = {{opacity: 1}}
        // exit = {{opacity: 0}}
      >
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 70 }}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <ScrollControls pages={2}>
              <ScrollingText
                rotation={[-Math.PI / 4, 0, 0]}
                separation={1}
                text={introText}
                position={[0, 1, -1]}
              />
              <Stars position={[0, -5, 0]} />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </motion.div>
    </AnimatePresence>
  )
}
export default IntroductionDiv
