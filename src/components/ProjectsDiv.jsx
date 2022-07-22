import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
const ProjectDiv = () => {
    return(
        <motion.div id="projects" className='p-8 bg-blue-900 flex flex-col h-screen'>
            <motion.div className="text-white text-3xl md:text-6xl lg:text-7xl"
        style={{fontFamily:"Montserrat"}}>
                My most notable projects
            </motion.div>
        </motion.div>
    )
}
export default ProjectDiv
