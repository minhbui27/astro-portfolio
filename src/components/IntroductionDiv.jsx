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
import yodaPointing from '/yoda-pointing.png'
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
  const arrowControl = useAnimationControls()
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

	I chose Computer Engineering
	because of my love for 
	robotics, and both the hardware and
	software side that it
	includes.

	I endeavor to be a great 
	engineer that will leave impressionable 
	results that will inspire the 
	young generation, as I 
	was inspired when I was younger.

	Note: Because the nature of the
	framer-motion framework, and since
	I created this effect in almost
	vanilla CSS, you need to 
	reload the page in order to reset the text
	to the original position
	`
  const ref = useRef(null)
  return (
    <AnimatePresence>
      <motion.div
        id='introduction'
        className='flex flex-col h-screen w-screen transform-gpu'
        ref={ref}
      >
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 70 }}>
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Html fullscreen>
              <div className='fade flex flex-col'>
                <div className='relative m-2 top-24 z-10 h-16 w-16'>
                  {currentButton == 'start' ? (
                    <FontAwesomeIcon
                      size='3x'
                      className='icons'
                      icon={faPlay}
                      color={buttonColor}
                      onMouseOver={() => setColor('#feda4a')}
                      onMouseOut={() => setColor('white')}
                      onClick={() => {
                        setButton('stop')
                        arrowControl.start({
                          opacity: 0,
                          transition: { duration: 2 },
                        })
                        startScroll.start({
                          y: '-10000px',
                          translateZ: '-4000px',
                          rotateX: '25deg',
                          transition: {
                            ease: 'linear',
                            duration: 45,
                          },
                        })
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      size='3x'
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
                <motion.div
                  animate={arrowControl}
                  initial={{
                    x: 100,
                    y: 10,
                    rotateZ: '-45deg',
                  }}
                  className='h-16 w-16'
                >
                  <motion.img initial={{ scale: 1.5 }} src={yodaPointing} />
                </motion.div>
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
