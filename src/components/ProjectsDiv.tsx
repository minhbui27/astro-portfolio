import * as React from 'react'
import Card from '../layouts/Card'
import { motion } from 'framer-motion'
import './ProjectsDiv.scss'
const ProjectDiv = (): JSX.Element => {
  return (
    <div id='projects' className='bg-blue-900 flex flex-col min-h-screen'>
      <motion.div className='mt-16 projectsText text-white text-3xl md:text-6xl lg:text-7xl'>
        PROJECTS
      </motion.div>

      <div className='flex flex-col md:flex-row card-container'>
        <Card
          image='digital_oscillator.jpg'
          title='Bistable Computer Clock'
          content=''
        />
        <Card
          image='discord_bot.png'
          title='Math Discord Bot'
          content=''
        />
        <Card
          image='rc_car.jpg'
          title='RC LEGO Car'
          content=''
        />
      </div>
    </div>
  )
}
export default ProjectDiv
