import React, { useRef, useEffect, Suspense, useState } from 'react'
import {
  useInView,
  motion,
  AnimatePresence,
  useAnimationControls,
} from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Html } from '@react-three/drei'
import { ScrollControls, useScroll } from '../helpers/ScrollControls'
import { Stars } from './Welcome'
import { Bounds } from '../helpers/BoundsNoRotation.tsx'
import * as random from 'maath/random/dist/maath-random.esm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faRedo, faStop } from '@fortawesome/free-solid-svg-icons'
import './IntroductionDiv.scss'
function ScrollingText(props) {
  const ref = useRef()
  const scroll = useScroll()
  return (
    <motion.div
      animate={props.startScroll}
      initial={{
        rotateX: '20deg',
        y: '100px',
        transformPerspective: '400px',
      }}
    >
      <motion.div className='scrollingText flex flex-col'>
        {props.text.split('\n').map((i) => {
          // console.log(i)
          return (
            <p key={i} className='flex justify-center text-7xl'>
              {i}
            </p>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
const IntroductionDiv = () => {
  const startScroll = useAnimationControls()
  const [currentButton, setButton] = useState('start')
  const introText = `Hi, my name is Minh Bui
	I'm currently a student studying 
	Computer Engineering at UCSB
	aaaaaaaaaaaaaaaaaaaaaaaaaaaa
	`
  const ref = useRef(null)
  return (
    <AnimatePresence>
      <motion.div
        id='introduction'
        className='bg-black flex flex-col h-screen w-screen transform-gpu'
        ref={ref}
        // animate = {{opacity: 1}}
        // exit = {{opacity: 0}}
      >
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 70 }}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Html fullscreen>
              <div className='m-2 h-8 w-8 bg-blue-400'>
                {currentButton == 'start' ? (
                  <FontAwesomeIcon
                    className='icons'
                    icon={faPlay}
                    color='white'
                    onClick={() => {
                      setButton('stop')
                      startScroll.start({
                        translateZ: '-1000px',
                        transition: { duration: 5 },
                      })
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    className='icons'
                    icon={faStop}
                    color='white'
                    onClick={() => {
                      setButton('start')
                      startScroll.stop()
                    }}
                  />
                )}
              </div>
       {/*        <div className='m-2 h-8 w-8 bg-blue-400'> */}
       {/*          <FontAwesomeIcon */}
       {/*            className='icons' */}
       {/*            icon={faRedo} */}
       {/*            color='white' */}
       {/*            onClick={() => { */}
					  {/* console.log('clicked') */}
       {/**/}
       {/*            }} */}
       {/*          /> */}
       {/*        </div> */}
              <ScrollingText startScroll={startScroll} text={introText} />
            </Html>
            <Stars position={[0, -5, 0]} />
          </Suspense>
        </Canvas>
      </motion.div>
    </AnimatePresence>
  )
}
export default IntroductionDiv
