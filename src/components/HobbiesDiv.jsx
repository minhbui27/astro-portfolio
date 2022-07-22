import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
const HobbiesDiv = () =>
{
    return(
        <motion.div id="hobbies" className="p-8 bg-gray-800 flex flex-col h-screen">
        <motion.h1
        className="text-white text-3xl md:text-6xl lg:text-7xl"
        style={{fontFamily:"Montserrat"}}

        >Some of my hobbies</motion.h1>
        </motion.div>
    )
}
export default HobbiesDiv