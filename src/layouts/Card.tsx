import * as React from 'react'
import { motion } from 'framer-motion'
import '../styles/Card.scss'
const Card = ({ ...props }): JSX.Element => {
  return (
    <motion.div className='h-[35rem] md:h-[40rem] my-2 md:my-8 px-4 w-full md:w-[20rem] lg:w-96 flex-none'>
			{/*bg-zinc-300/300 indicates the color zinc-300 with opacity 30%*/}
      <div className='h-full w-full card-content bg-zinc-900/80 rounded-xl'>
        <img
          className='image-height h-64 w-full object-cover rounded-t-xl'
          src={`/project_images/${props.image}`}
        />
        <div className='my-2 card-title md:text-3xl w-full flex flex-row justify-center text-center text-white'>
          {props.title}
        </div>
        <div className='text-white text-md md:text-lg lg:text-xl px-8 h-3/5 w-full'>{props.content}</div>
      </div>
    </motion.div>
  )
}
export default Card
