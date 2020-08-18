import React from 'react';
import koala from '../koala.jpg';




class Flashlight extends React.Component {

    showFlashlight = () => {
        const spotlight = document.getElementById("spotlight");
        spotlight.style.display = "block";

        //show image after flashlight moves on
        const img = document.getElementById("flashlight-img");
        img.style.filter = "brightness(100%)";
    }

    moveFlashlight = e => {
        const spotlight = document.getElementById("spotlight");
        const container = document.getElementById("container");
        let rect = container.getBoundingClientRect();
        console.log(rect);
        //get coordinates of mouse
        let x = Math.round(e.clientX - rect.x);
        let y = Math.round(e.clientY - rect.y);
        spotlight.style.left = (x) + 'px';
        spotlight.style.top = (y) + 'px';
        console.log(getComputedStyle(spotlight).left);
        console.log(getComputedStyle(spotlight).top);
    }

    hideFlashlight = () => {
        const spotlight = document.getElementById("spotlight");
        spotlight.style.display = "none";

        //hide the image after flashlight is moved off
        const img = document.getElementById("flashlight-img");
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
                <div style={styles.container} id="container"
                    onMouseEnter={this.showFlashlight} onMouseMove={this.moveFlashlight} onMouseLeave={this.hideFlashlight}>
                    <img id="flashlight-img" src={koala} alt="koala" style={styles.img} ></img>
                    <div id="spotlight" style={styles.flashlight}></div>
                </div>
                
            </div>
        );
    }

}

const styles = {
    container: {
        marginLeft: '100px', /*this is just for an offset*/
        position: 'relative', 
        overflow: 'hidden',
        maxWidth: 'min-content',
        maxHeight: 'min-content',
    },
    img: {
        width: '50vw',
        filter: 'brightness(0%)',
    },
    flashlight: {
        display: 'none', /*so it is not shown until mouseover*/
        borderRadius: '100%',
        content: "",
        position: 'absolute',
        width: '10vw',
        height: '10vw',
        zIndex: '1',
        transform: 'translate(-50%, -50%)', /*center on mouse*/
        border: 'solid black 50vw',
    }
}


export default Flashlight;