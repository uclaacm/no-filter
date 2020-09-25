import React from 'react';
import koala from '../img/koala2.jpg';
import './style/Flashlight.css';




class Flashlight extends React.Component {

    showFlashlight = () => {
        const spotlight = document.getElementById("spotlight");
        spotlight.style.opacity = 1;

        //show image after flashlight moves on
        const img = document.getElementById("container");
        img.style.filter = "brightness(100%)";
    }

    hoverMoveFlashlight = e => {
        const spotlight = document.getElementById("spotlight");
        const container = document.getElementById("container");
        let rect = container.getBoundingClientRect();

        //get coordinates of mouse
        let x = Math.round(e.clientX - rect.x);
        let y = Math.round(e.clientY - rect.y);
        spotlight.style.left = (x) + 'px';
        spotlight.style.top = (y) + 'px';
    }

    touchMoveFlashlight = e => {
        const spotlight = document.getElementById("spotlight");
        const container = document.getElementById("container");
        let rect = container.getBoundingClientRect();

        //get coordinates of mouse
        let x = Math.round(e.targetTouches[0].clientX - rect.x);
        let y = Math.round(e.targetTouches[0].clientY - rect.y);
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
            <div id="container" style={backgroundStyles}
                onMouseEnter={this.showFlashlight} onMouseMove={this.hoverMoveFlashlight} onMouseLeave={this.hideFlashlight}
                onTouchStart={this.showFlashlight} onTouchMove={this.touchMoveFlashlight} onTouchEnd={this.hideFlashlight}>
                {/* <img id="flashlight-img" src={koala} alt="koala"></img> */}
                <div id="spotlight"></div>
            </div>
        );
    }

}

const backgroundStyles = {
    backgroundImage: `url(${koala})`,
};

export default Flashlight;