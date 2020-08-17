import React from 'react';
import koala from '../koala.jpg';




class Flashlight extends React.Component {

    hoverMouse = e => {
        const spotlight = document.getElementById("spotlight");
        // let diameter = parseInt(getComputedStyle(spotlight).width);
        // console.log(diameter);
        // diameter /= 2;
        document.getElementById("flashlight-img").style.filter = "brightness(100%)";

        //get coordinates of mouse
        let x = e.nativeEvent.offsetX;
        let y = e.nativeEvent.offsetY;
        spotlight.style.left = (x) + 'px';
        spotlight.style.top = (y) + 'px';
        console.log(getComputedStyle(spotlight).left);
        console.log(getComputedStyle(spotlight).top);
    }
        


    render () {
        return (
            <div>
                <div>
                    <h1>Shining a Flashlight on CNNs</h1>
                    <h2>Can you figure out what's in the image below using the flashlight?</h2>
                    <p>Hover your mouse/finger over the image.</p>
                </div>
                <div style={{position: 'relative', width: 'max-content'}}>
                    <div id="spotlight" style={styles.flashlight}></div>
                    {/* <div id="onTop" style={styles.cover} onMouseMove={this.hoverMouse}></div> */}
                    <img id="flashlight-img" src={koala} alt="koala" style={styles.img} onMouseMove={this.hoverMouse}></img>
                </div>
                
            </div>
        );
    }

}

const styles = {
    img: {
        width: '50vw',
        filter: 'brightness(0%)',
        zIndex: '1',
    },
    cover: {
        width: '50vw',
        height: '50vw',
        background: 'black',
        position: 'absolute',
        zIndex: '2',
    },
    flashlight: {
        borderRadius: '100%',
        background: 'white',
        mixBlendMode: 'difference',
        position: 'absolute',
        width: '10vw',
        height: '10vw',
        zIndex: '3',
    }
}


export default Flashlight;