import React from 'react';
import koala from '../img/koala2.jpg';
import mouse from '../img/mouse.png';
import './style/Flashlight.css';

class Flashlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            instructionOpacity: 1,
            left: null,
            top: null,
            // brightness: "brightness(0%)",
            backgroundImage: false,
        }
        this.myRef = React.createRef();
    }
    showFlashlight = e => {
        e.preventDefault();

        //opacity for spotlight, brightness for container
        // this.setState({opacity: 1, brightness: "brightness(100%)"/*, instructions: 0*/});
        this.setState({opacity: 1, backgroundImage: true, instructionOpacity: 0});
    }

    hoverMoveFlashlight = e => {
        e.preventDefault();
        let rect = this.myRef.current.getBoundingClientRect();

        //get coordinates of mouse
        let x = e.clientX - rect.x;
        let y = e.clientY - rect.y;

        this.moveFlashlight(x, y);
    }

    touchMoveFlashlight = e => {
        //TODO: Mobile compatibility
        e.preventDefault();
        let rect = this.myRef.current.getBoundingClientRect();

        //get coordinates of mouse
        let x = e.targetTouches[0].clientX - rect.x - 20;
        let y = e.targetTouches[0].clientY - rect.y - 20;

        this.moveFlashlight(x, y);
    }

    moveFlashlight = (x, y) => {
        this.setState({left: `${x}px`, top: `${y}px`});
    }

    hideFlashlight = e => {
        e.preventDefault();

        //opacity for spotlight, brightness for container
        // this.setState({opacity: 0, brightness: "brightness(0%)"});
        this.setState({opacity: 0, backgroundImage: false, instructionOpacity: 1})
    }

    render () {
        let background = this.state.backgroundImage ? `url(${koala})` : '#041850';
        const stylesInJS = {
            backgroundStyles: {
                background: background,
                // backgroundImage: `url(${koala})`,
                // filter: this.state.brightness,
            },
            instructions: {
                opacity: this.state.instructionOpacity,
            },
            spotlight: {
                opacity: this.state.opacity,
                top: this.state.top,
                left: this.state.left,
            }
        }
        return (
            <div id="container" style={stylesInJS.backgroundStyles} ref={this.myRef}
                onMouseEnter={this.showFlashlight} onMouseMove={this.hoverMoveFlashlight} onMouseLeave={this.hideFlashlight}
                onTouchStart={this.showFlashlight} onTouchMove={this.touchMoveFlashlight} onTouchEnd={this.hideFlashlight}>
                <p id="instructions" style={stylesInJS.instructions}>
                    <img src={mouse} alt="Computer mouse arrow" id="mouse"></img>
                    Hover your mouse/finger over this image.</p>
                <div id="spotlight" style={stylesInJS.spotlight}></div>
            </div>
        );
    }
}

export default Flashlight;