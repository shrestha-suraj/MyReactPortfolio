import React from 'react'
import './Navigation.css'
import {HomeOutlined, UserOutlined, 
        CopyOutlined, CodepenCircleOutlined,
        FundProjectionScreenOutlined,PhoneOutlined
} from '@ant-design/icons'
const Navigation=()=> {
    return (
        <ul className="nav-list">
            <li className="list-item">
                <a href="#home-div" className="myLink">
                    <HomeOutlined/><span className="link-text">Home</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#profile-div" className="myLink">
                    <UserOutlined/><span className="link-text">About Me</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#experience-div" className="myLink">
                    <CodepenCircleOutlined/><span className="link-text">Experience</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#projects-div" className="myLink">
                    <FundProjectionScreenOutlined/><span className="link-text">Projects</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#resume-div" className="myLink">
                    <CopyOutlined/><span className="link-text">Resume</span>
                </a>
            </li>
            <li className="list-item">
                <a href="#contact-div" className="myLink">
                    <PhoneOutlined/><span className="link-text">Contact Me</span>
                </a>
            </li>
            
            

        </ul>
    )
}

export default Navigation