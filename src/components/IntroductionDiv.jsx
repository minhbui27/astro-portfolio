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
    <section className='star-wars'>
      <motion.div
        animate={props.startScroll}
        className='crawl'
        initial={{
          y: '-100px',
          translateZ: '0px',
          rotateX: '20deg',
        }}
      >
        <motion.div className='flex flex-col'>
          <p className='flex justify-center text-7xl'>(Click the button)</p>
          <div className='h-8' />
          {props.text.split('\n').map((i) => {
            console.log(i == '')
            return i == '' ? (
				<div className='h-48'></div>
            ) : (
              <p key={i} className='justify-center'>
                {i}
              </p>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
const IntroductionDiv = () => {
  const startScroll = useAnimationControls()
  const [currentButton, setButton] = useState('start')
  const [buttonColor, setColor] = useState('white')
  const introText = `Hi, my name is Minh Bui
	I'm currently a student studying 
	Computer Engineering at UCSB
	Some of my hobbies include
	coding, gaming, and playing 
	sports with my good friends.

	I also enjoy scifi movies 
	(such as Star Wars very much)
	because I think that they are
	an excellent catalyst for growth
	of imagination.

	I went into Computer Engineering
	because of my particular love for 
	robotics, and both the hardware and
	software engineering side that robotics
	includes.

	I endeavor to be a great software/hardware
	engineer that will leave impressionable 
	results that will inspire the 
	young generation, as I 
	was inspired when I was younger.

	Note: Because the nature of the
	framer-motion framework, you need to 
	reload the page in order to reset the text
	to the original position
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
              <div className='fade'>
                <div className='relative m-2 top-24 z-10 h-16 w-16'>
                  {currentButton == 'start' ? (
                    <FontAwesomeIcon
                      size='2x'
                      className='icons'
                      icon={faPlay}
                      color={buttonColor}
                      onMouseOver={() => setColor('#feda4a')}
                      onMouseOut={() => setColor('white')}
                      onClick={() => {
                        setButton('stop')
                        startScroll.start({
                          y: '-6000px',
                          translateZ: '-2500px',
                          rotateX: '25deg',
                          transition: { duration: 45 },
                        })
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      size='2x'
                      className='icons'
                      onMouseOver={() => setColor('#feda4a')}
                      onMouseOut={() => setColor('white')}
                      icon={faStop}
                      color={buttonColor}
                      onClick={() => {
                        setButton('start')
                        startScroll.stop()
                      }}
                    />
                  )}
                </div>
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
