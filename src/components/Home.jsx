import React from 'react'
import IntroductionDiv from './IntroductionDiv'
import ProjectDiv from './ProjectsDiv'
import HobbiesDiv from './HobbiesDiv'
import Welcome from './Welcome'
import {useEffect, useState} from 'react'
import '../index.css'
import {motion} from "framer-motion/dist/framer-motion"
import Nav from './Nav'


const Home = () => {
    //This function makes sure scroll to the right position when clicking on a link on the navbar
    const handleScroll = () => {
        const position = window.scrollY;
        if(!(position % window.innerHeight)) {
            window.scrollTo(0,position)
        }
    } 
    //This useEffects outputs the current scroll position of the window
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        //cleanup function
        return () => {
            window.removeEventListener('scroll',handleScroll);
        };

    },[])
    

    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
    return( 
        
        <motion.div 
            id="home"
            initial='initial'
            animate='animate'
            exit='exit'
        >
            {/* The nav div should have higher z-index than all other divs */}
            <motion.div className='z-50 fixed w-screen'> 
                <Nav/>
            </motion.div>
            <Welcome/>
            {/* The component below encloses the Introduction div, which has a height=screen and padding of 8px*/}
            <IntroductionDiv/>
            {/* The component below encloses the Hobbies div, which contains some hobbies*/}
            <HobbiesDiv/>
            {/* The component below encloses the Projects div, contents will be added later*/}
            <ProjectDiv/>
        </motion.div>
    )
}

export default Home;
