import * as React from 'react'
import Card from '../layouts/Card'
import { motion } from 'framer-motion'
import './ProjectsDiv.scss'
const ProjectDiv = (): JSX.Element => {
  return (
    <div id='projects' className='bg-blue-900 flex flex-col min-h-screen'>
      <motion.div className='mt-16 projectsText text-white text-3xl md:text-6xl lg:text-7xl'>
        Some of my projects
      </motion.div>

      <div className='px-8 flex flex-col md:flex-row justify-center card-container'>
					<Card
						image='digital_oscillator.jpg'
						title='Bistable Clock'
						content='A clock designed to be used in a breadboard computer made from a 555-timer chip and an RC circuit, which in conjunction simulates a square wave oscillator that can operate in astable and monostable modes, and reach up to 60Mhz.'
					/>
					<Card
						image='discord_bot.png'
						title='Math Discord Bot'
						content='A bot written with the purpose of integrating mathematical operations with the discord client. Capable of performing multiple matrix operations such as rref, calculus operations such as differentiation, and such operations are displayed through a LaTeX api as an image.'
					/>
					<Card
						image='rc_car.jpg'
						title='RC LEGO Car'
							content='Converted a LEGO Technic 24hr racing car into a bluetooth controlled car, using an Arduino board, motor controllers, DC motors, custom mounting of the drive shaft and steering rack using 3d printed parts.'
					/>
      </div>
    </div>
  )
}
export default ProjectDiv
