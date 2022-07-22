import React from 'react';
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Footer = () => {
    const [color_1,changeColor_1] = useState("white");
    const [color_2,changeColor_2] = useState("white");
    const [color_3,changeColor_3] = useState("white");
    return(
        <div className="bg-gray-700 flex flex-wrap h-16 justify-end content-center px-6">
            <div className="px-2" style={{fontFamily:"Montserrat",color:"white"}}> 
                Link to my contacts:
            </div>
            <div className="px-2">
                <a href="https://www.facebook.com/profile.php?id=100029297257056/">
                    <FontAwesomeIcon icon={['fab', 'facebook']} color={color_1}onMouseEnter={() => changeColor_1("rgb(17, 24, 39)")} onMouseLeave={() => changeColor_1("white")} size="xl"/>
                </a>
            </div>
            <div className="px-2">
                <a href="https://github.com/minhbui27">
                    <FontAwesomeIcon icon={['fab', 'github']} color={color_2} onMouseEnter={() => changeColor_2("rgb(17, 24, 39)")} onMouseLeave={() => changeColor_2("white")} size="xl"/>
                </a>
            </div>
            <div className="px-2">
                <a href="https://www.instagram.com/bminh.2709/">
                    <FontAwesomeIcon icon={['fab','instagram']} color={color_3} onMouseEnter={() => changeColor_3("rgb(17, 24, 39)")} onMouseLeave={() => changeColor_3("white")} size="xl"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;