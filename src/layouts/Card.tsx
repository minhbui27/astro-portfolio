import * as React from 'react'
import {motion} from 'framer-motion'
const Card = ({...props}): JSX.Element => {
	return(
		<motion.div className='opacity-90 mx-4 w-1/3 h-full bg-blue-300 flex-none'>
			<motion.div className="text-center w-full h-1/3 text-6xl">
				test
			</motion.div>
		</motion.div>
	)
}
export default Card
