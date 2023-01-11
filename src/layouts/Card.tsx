import * as React from 'react'
import { motion } from 'framer-motion'
import '../styles/Card.scss'
const Card = ({ ...props }): JSX.Element => {
  return (
    <motion.div className='card py-16 px-4 w-full md:w-1/3 flex-none'>
      <div className='w-full card-content bg-blue-900 opacity-90 rounded-3xl'>
        <img
          className='image-height h-64 w-full object-cover rounded-3xl'
          src={`/project_images/${props.image}`}
        />
        <div className='my-2 card-title md:text-3xl w-full flex flex-row justify-center text-center text-white'>
          {props.title}
        </div>
        <div className='h-3/5 w-full'>{props.content}</div>
      </div>
    </motion.div>
  )
}
export default Card
