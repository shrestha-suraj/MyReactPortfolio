import React from 'react'
import './styles/home.css'
import photo from './media/me.png'

const Home =()=>{
    return (
        <div id="home-div" className="home-div">
            <img src={photo} alt="Suraj Shrestha" className="my-image"/>
            <div className="info-text">
                <h1 className="name">Suraj Shrestha</h1>
                <h1 className="position">Full Stack Developer</h1>

            </div>
        </div>
    )
}

export default Home