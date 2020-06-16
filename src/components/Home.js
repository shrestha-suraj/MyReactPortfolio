import React from 'react'
import './styles/home.css'
import photo from './media/me.png'

const Home =()=>{
    return (
        <div id="home-div" className="home-div">
            <img src={photo} alt="Suraj Shrestha" className="my-image"/>
            <div className="info-text">
                <p className="name"><span className="hi">Hi,</span><span className="i-am"> I am </span>Suraj Shrestha</p>
                <p className="position">Full Stack Developer</p>
                <p className="goal"><i>To obtain a professional position in the field of Computer Science utilizing my relevant experience, technical expertise and problem-solving skills.</i></p>

            </div>
        </div>
    )
}

export default Home