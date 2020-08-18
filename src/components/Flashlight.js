import React from 'react';
import koala from '../koala.jpg';
import './style/Flashlight.css';




class Flashlight extends React.Component {

    showFlashlight = () => {
        const spotlight = document.getElementById("spotlight");
        spotlight.style.opacity = 1;

        //show image after flashlight moves on
        const img = document.getElementById("container");
        img.style.filter = "brightness(100%)";
    }

    moveFlashlight = e => {
        const spotlight = document.getElementById("spotlight");
        const container = document.getElementById("container");
        let rect = container.getBoundingClientRect();

        //get coordinates of mouse
        let x = Math.round(e.clientX - rect.x);
        let y = Math.round(e.clientY - rect.y);
        spotlight.style.left = (x) + 'px';
        spotlight.style.top = (y) + 'px';
    }

    hideFlashlight = () => {
        const spotlight = document.getElementById("spotlight");
        spotlight.style.opacity = 0;

        //hide the image after flashlight is moved off
        const img = document.getElementById("container");
        img.style.filter = "brightness(0%)";
        

    }
        


    render () {
        return (
            <div>
                <div>
                    <h1>Shining a Flashlight on CNNs</h1>
                    <h2>Can you figure out what's in the image below using the flashlight?</h2>
                    <p>Hover your mouse/finger over the image.</p>
                </div>
                <div id="container"
                    onMouseEnter={this.showFlashlight} onMouseMove={this.moveFlashlight} onMouseLeave={this.hideFlashlight}>
                    {/* <img id="flashlight-img" src={koala} alt="koala"></img> */}
                    <div id="spotlight"></div>
                </div>
            </div>
        );
    }

}

export default Flashlight;