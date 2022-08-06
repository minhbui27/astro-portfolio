import React from 'react'
import { motion } from 'framer-motion'
import './HobbiesDiv.scss'
const HobbiesDiv = () => {
  return (
    <motion.div
      id='hobbies'
      className='hobbiesDiv p-8 bg-gray-800 flex flex-col h-screen'
    >
      <div className='w-full h-16'></div>
      <motion.h1 className='hobbiestext text-white text-3xl md:text-6xl lg:text-7xl'>
        SOME OF MY HOBBIES
      </motion.h1>
    </motion.div>
  )
}
export default HobbiesDiv
