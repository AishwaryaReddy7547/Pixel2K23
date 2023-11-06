import React from "react";
import SideNav from "./SideNav";
import './Video.css';
import video from './video.mp4';
import Typewriter from 'typewriter-effect';

function Video() {
    return (
        <div className="'video-container">
            <video autoPlay loop muted id="background-video" width="100%">
                <source src={video} type="video/mp4" />
            </video>
            <span><SideNav /></span>
            <span>
            <div className="text-overlay">
                <h1 style={{fontFamily:"serif",fontSize:"70px"}}>PIXEL 2023</h1>
                <h3>A National Level Technical Symposium</h3>
                <br />
                <h3>From the Department of CSE</h3>
                <h2>Jawaharlal Nehru Technological University,Anantapuramu</h2>
                <br />
                <div className="spotregistrations" style={{color:"white"}}>
                <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Spot Registrations")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("are available")
                        .start();
                }}/>
                </div>
                <br />
                <h3>Save the Date</h3>
                <h2>25th November,2023</h2>
                <h3>Venue</h3>
                <h4>JNTUACEA,Anantapuramu</h4>
            </div>
            </span>
        </div>
    );
}

export default Video;



