import React, { useRef, useEffect, Suspense, useState } from 'react'
import { useInView, motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import { ScrollControls, useScroll } from '../helpers/ScrollControls'
import { Stars } from './Welcome'
import { Bounds } from '../helpers/BoundsNoRotation.tsx'
import * as random from 'maath/random/dist/maath-random.esm'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
  import { faPlay } from '@fortawesome/free-solid-svg-icons'
function ScrollingText(props) {
  const ref = useRef()
  const scroll = useScroll()
  let displacement = 400 
  // useFrame((state,delta) => {
  // 	const offset = scroll.offset
  // 	ref.current.position.set(0,Math.sin(offset)*10/Math.sin(1),0);
  // })
  return (
    <motion.div className='flex flex-col h-full w-full transform-gpu' 
	animate = {{
		y: displacement,
	}}>
	  {props.text.split('\n').map((i) => {
		  console.log(i);
		return (<div 
			key = {i}
			className='flex justify-center text-4xl text-yellow-800'>
			{i}	
		</div>)
	  })}
    </motion.div>
  )
}
const IntroductionDiv = () => {
  const introText = `Hi, my name is Minh Bui
	I'm currently a student studying 
	Computer Engineering at UCSB
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
            <Html fullscreen>
				<FontAwesomeIcon icon={faPlay} color="white" onClick={() => {console.log("clicked!")}} />
              <ScrollingText text={introText} />
            </Html>
            <Stars position={[0, -5, 0]} />
          </Suspense>
        </Canvas>
      </motion.div>
    </AnimatePresence>
  )
}
export default IntroductionDiv
