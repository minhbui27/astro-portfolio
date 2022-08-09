import React from 'react'
import Card from '../layouts/Card'
import { motion } from 'framer-motion'
import './ProjectsDiv.scss'
const ProjectDiv = (): JSX.Element => {
  return (
    <motion.div
      id='projects'
      className='p-8 bg-blue-900 flex flex-col h-screen'
    >
      <div className='h-16 w-full'></div>
      <motion.div className='projectsText text-white text-3xl md:text-6xl lg:text-7xl'>
        PROJECTS
      </motion.div>

      <div className='w-full h-auto md:h-full items-center'>
        <div className='flex flex-nowrap items-start h-full overflow-x-scroll'>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
        </div>
      </div>
    </motion.div>
  )
}
export default ProjectDiv
