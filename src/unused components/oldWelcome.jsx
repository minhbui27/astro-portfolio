import planet from '../images/planet.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
            // const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
            // const firstName = { 
            //     initial: {
            //         y: 0,
            //     },
            //     animate: {
            //         y: 1,
            //         transition: { 
            //             delayChildren: 0.6,
            //             staggerChildren: 0.04, 
            //             staggerDirection: 1,
            //         }
            //     }
            // }
            // const letter = {
            //     initial: {
            //       opacity: 0,
            //       y: 100,
            //     },
            //     animate: {
            //       y: 0,
            //       opacity: 100,
            //       transition: { duration: 1, ...transition },
            //     },
            //   };
            {/* <motion.div */}
            // className="background flex flex-col h-screen"
            // exit={{opacity:0, x:"100vw", scale:1.2}}
            // transition={{duration:1}}
            // >
            //     <div className="h-32"></div>
            //     {/* <div className="h-32">
            //         <motion.div
            //             className="bg-green-400 h-32 w-32"
            //             style={{x}}
            //         />
            //     </div>
            //     <button onMouseDown={changeX} onMouseUp={clearInterval}>Right</button> */}
            //     <div className="flex flex-nowrap justify-evenly h-64 content-center">
            //         {/* letter W */}
            //         <svg width="115.2" height="100%" viewBox="0 0 115.2 70" xmlns="http://www.w3.org/2000/svg">
            //             <motion.path
            //                 animate={{
            //                     y:[9, -18, 9]
            //                 }}
            //                 transition={{
            //                     duration:3,
            //                     loop: Infinity
            //                 }}
            //                 stroke-linecap="round" 
            //                 fill-rule="evenodd" 
            //                 font-size="9pt" 
            //                 fill="rgb(52, 211, 153)"
            //                 d="M 96.3 0 L 115.2 0 L 92.5 70 L 71.3 70 L 57.9 27.4 L 43.9 70 L 22.7 70 L 0 0 L 20.4 0 L 34.5 44.7 L 49.3 0 L 67.5 0 L 81.6 45.1 L 96.3 0 Z"
            //             />
            //         </svg>
            //         {/* letter E */}
            //         <svg width="115.2" height="100%" viewBox="0 0 115.2 70" xmlns="http://www.w3.org/2000/svg">
            //             <motion.path
            //                 animate={{
            //                     y:[5, -10, 5]
            //                 }}
            //                 transition={{
            //                     duration:3,
            //                     loop: Infinity
            //                 }}
            //                 stroke-linecap="round" 
            //                 fill-rule="evenodd" 
            //                 font-size="9pt" 
            //                 fill="rgb(59, 130, 246)"
            //                 d="M 19.6 54.7 L 56.2 54.7 L 56.2 70 L 0 70 L 0 0 L 54.9 0 L 54.9 15.3 L 19.6 15.3 L 19.6 27.1 L 50.7 27.1 L 50.7 41.9 L 19.6 41.9 L 19.6 54.7 Z"
            //             />
            //         </svg>
            //         {/* letter L */}
            //         <svg width="115.2" height="100%" viewBox="0 0 115.2 70" xmlns="http://www.w3.org/2000/svg">
            //             <motion.path
            //                 animate={{
            //                     y:[6, -12, 6]
            //                 }}
            //                 transition={{
            //                     duration:3,
            //                     loop: Infinity
            //                 }}
            //                 stroke-linecap="round" 
            //                 fill-rule="evenodd" 
            //                 font-size="9pt" 
            //                 fill="rgb(239, 68, 68)"
            //                 d="M 0 70 L 0 0 L 19.8 0 L 19.8 54.3 L 53.2 54.3 L 53.2 70 L 0 70 Z"
            //             />
            //         </svg>
            //         {/* letter C */}
            //         <svg width="115.2" height="100%" viewBox="0 0 115.2 70" xmlns="http://www.w3.org/2000/svg">
            //             <motion.path
            //                 animate={{
            //                     y:[-10, 20, -10]
            //                 }}
            //                 transition={{
            //                     duration:3,
            //                     loop: Infinity
            //                 }}
            //                 stroke-linecap="round" 
            //                 fill-rule="evenodd" 
            //                 font-size="9pt" 
            //                 fill="rgb(245, 158, 11)"
            //                 d="M 68.601 13.201 L 56.001 24.601 A 24.448 24.448 0 0 0 50.246 19.446 A 19.75 19.75 0 0 0 39.501 
            //                 16.401 A 22.207 22.207 0 0 0 33.641 17.148 A 18.831 18.831 0 0 0 29.351 18.901 Q 24.901 21.401 22.451 
            //                 25.951 A 20.468 20.468 0 0 0 20.195 33.189 A 25.921 25.921 0 0 0 20.001 36.401 Q 20.001 42.301 22.451 
            //                 46.851 Q 24.901 51.401 29.351 53.901 A 19.576 19.576 0 0 0 37.067 56.281 A 24.266 24.266 0 0 0 39.501 
            //                 56.401 A 20.228 20.228 0 0 0 54.479 49.896 A 28.429 28.429 0 0 0 56.001 48.201 L 68.601 59.601 Q 63.501 
            //                 66.001 55.801 69.401 Q 48.101 72.801 38.501 72.801 Q 27.501 72.801 18.751 68.151 Q 10.001 63.501 5.001 
            //                 55.201 Q 0.001 46.901 0.001 36.401 Q 0.001 25.901 5.001 17.601 Q 10.001 9.301 18.751 4.651 A 39.917 39.917
            //                 0 0 1 33.796 0.223 A 48.814 48.814 0 0 1 38.501 0.001 A 
            //                 46.621 46.621 0 0 1 48.567 1.047 A 38.284 38.284 0 0 1 55.801 3.401 Q 63.501 6.801 68.601 13.201 Z"
            //             />
            //         </svg>

            //         {/* planet  */}
            //         <div className="flex flex-wrap content-center">
            //             {/* <motion.img
            //                 className="h-32 w-32"
            //                 src={planet}
            //                 drag
            //                 dragConstraints={{
            //                     left:-250,
            //                     right:250,
            //                     top:-100,
            //                     bottom:500,
            //                 }}
            //             /> */}
            //         </div>
                    
            //         {/* letter M */}
            //         <svg width="115.2" height="100%" viewBox="0 0 115.2 70" xmlns="http://www.w3.org/2000/svg">
            //             <motion.path
            //                 stroke-linecap="round" 
            //                 fill-rule="evenodd" 
            //                 font-size="9pt" 
            //                 fill="rgb(244, 114, 182)"
            //                 d="M 81.4 70 L 63.2 70 L 63 32.9 L 45 63.1 L 36.2 63.1 L 18.3 33.9 L 18.3 70 L 0 70 L 0 0 L 16.3 0 L 40.9 40.4 L 64.9 0 L 81.2 0 L 81.4 70 Z"
            //                 animate={{
            //                     y:[5, -10, 5]
            //                 }}
            //                 transition={{
            //                     duration:3,
            //                     loop: Infinity
            //                 }}
            //             />
            //         </svg>
            //         {/* letter E */}
            //         <svg width="115.2" height="100%" viewBox="0 0 115.2 70" xmlns="http://www.w3.org/2000/svg">
            //             <motion.path
            //                 animate={{
            //                     y:[7, -14, 7]
            //                 }}
            //                 transition={{
            //                     duration:3,
            //                     loop: Infinity
            //                 }}
            //                 stroke-linecap="round" 
            //                 fill-rule="evenodd" 
            //                 font-size="9pt" 
            //                 fill="rgb(139, 92, 246)"
            //                 d="M 19.6 54.7 L 56.2 54.7 L 56.2 70 L 0 70 L 0 0 L 54.9 0 L 54.9 15.3 L 19.6 15.3 L 19.6 27.1 L 50.7 27.1 L 50.7 41.9 L 19.6 41.9 L 19.6 54.7 Z"
            //             />
            //         </svg>
                    
                    
            //     </div>
            //     <motion.div className="hi flex flex-nowrap h-32 justify-start ml-10 lg:ml-8rem md:ml-26 sm:ml-18">
                        
            //         <motion.span
            //             variants={firstName}
            //             style={{
            //                 fontFamily:"Caveat",
            //                 fontSize:"clamp(40px, 100px, 100px)",
            //             }}
            //         >
            //             <motion.span style={{display:"inline-block"}} variants={letter}>H</motion.span>
            //             <motion.span style={{display:"inline-block"}} variants={letter}>i</motion.span>
            //             <motion.span style={{display:"inline-block"}} variants={letter}>!</motion.span>
            //         </motion.span>
                        
                    
            //     </motion.div>
            //     <motion.div className="imminh flex flex-nowrap h-32 justify-start ml-10 lg:ml-8rem md:ml-26 sm:ml-18">
                        
            //         <motion.span
            //             variants={firstName}
            //             style={{
            //                 fontFamily:"Caveat",
            //                 fontSize:"clamp(40px, 100px, 100px)",
            //             }}
            //         >
            //             <motion.span style={{display:"inline-block"}} variants={letter}>I'</motion.span>
            //             <motion.span style={{display:"inline-block"}} variants={letter}>m</motion.span>
            //             <motion.span> </motion.span>
            //             <motion.span style={{display:"inline-block"}} variants={letter}>M</motion.span>
            //             <motion.span style={{display:"inline-block"}} variants={letter}>i</motion.span>
            //             <motion.span style={{display:"inline-block"}} variants={letter}>n</motion.span>
            //             <motion.span style={{display:"inline-block"}} variants={letter}>h</motion.span>

            //         </motion.span>
                        
                    
            //     </motion.div>
            //     <div className='flex flex-col h-1/5'></div>
            //     <div className="flex flex-col justify-center h-1/5">
                    
            //         <motion.div 
            //             className="flex justify-center"
            //             animate={{
            //                 y:[-10, 20, -10]
            //             }}
            //             transition={{
            //                 duration:6,
            //                 loop: Infinity
            //             }}
            //         >
            //             <FontAwesomeIcon icon={['fas', 'angle-down']} color={"white"} size="3x"/>
            //         </motion.div>
            //     </div>
                
            // </motion.div>