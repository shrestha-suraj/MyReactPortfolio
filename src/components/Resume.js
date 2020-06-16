import React from 'react'
import resume from './media/resume.png'
import './styles/resume.css'


const Resume =()=>{
    return (
        <div id="resume-div">
            <img className="resume-image" src={resume} alt="Suraj Resume"/>
        </div>
    )
}

export default Resume