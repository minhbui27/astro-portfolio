import React, {Suspense, useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {softShadows, MeshWobbleMaterial, OrbitControls} from '@react-three/drei'
import {useSpring, a} from '@react-spring/three'
import Car from '../components/Car'
import {motion} from 'framer-motion'
softShadows()

const Game = () => {
    return(
        <div 
        
        className="h-screen w-full">
                
            <Canvas shadows colorManagement camera={{position: [-5,2,10],fov: 60}}>
                <ambientLight intensity={1}/>
                <directionalLight 
                    castShadow
                    position={[0,10,0]}
                    intensity={1} 
                    shadow-mapSize-width={1024} 
                    shadow-mapSize-height={1024} 
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <pointLight position={[-10,0,-20]} intensity={0.5}/>
                <pointLight position={[0,-10,0]} intensity={1.5}/>

                <group>
                    <mesh receiveShadow rotation={[-Math.PI/2,0,0]} position={[0,-3,0]}>
                        <planeBufferGeometry attach="geometry" args={[100,100]}/>
                        <shadowMaterial attach="material" opacity="0.3"/>
                    </mesh>
                </group>

                
                <Suspense fallback={null}>
                    <BB8/>                    
                </Suspense>
                <OrbitControls/>
            </Canvas>
        </div>
        
    )
}
export default Game;