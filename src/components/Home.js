import React from 'react'
import './styles/home.css'
import {DownCircleOutlined} from '@ant-design/icons';

const Home =()=>{
    return (
        <div id="home-div">
            <div className="info-text">
                <p className="name"><span className="hi">Hi,</span><span className="i-am"> I am </span>Suraj Shrestha</p>
                <p className="position">Full Stack Developer</p>
                <p className="goal"><i><span>"</span>Let's get to know me, shall we?<span>"</span></i></p>
            </div>
            <a href="#profile-div" className="go-button"><DownCircleOutlined/></a>
        </div>
    )
}

export default Home