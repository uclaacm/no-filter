import React from 'react';
import koala from '../img/koala2.jpg';
import './style/Flashlight.css';


/*TODO: REMOVE DOM MANIPULATION*/

class Flashlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            left: null,
            top: null,
            brightness: "brightness(0%)",
        }
        this.myRef = React.createRef();
    }
    showFlashlight = e => {
        e.preventDefault();

        //opacity for spotlight, brightness for container
        this.setState({opacity: 1, brightness: "brightness(100%)"});
    }

    hoverMoveFlashlight = e => {
        e.preventDefault();
        let rect = this.myRef.current.getBoundingClientRect();

        //OLD CODE
        // const container = document.getElementById("container");
        // let rect = container.getBoundingClientRect();
        // console.log(this.myRef.current.getBoundingClientRect());

        //get coordinates of mouse
        let x = e.clientX - rect.x;
        let y = e.clientY - rect.y;

        this.moveFlashlight(x, y);
    }

    touchMoveFlashlight = e => {
        //TODO: Mobile compatibility
        e.preventDefault();
        let rect = this.myRef.current.getBoundingClientRect();

        //OLD CODE (havent tested)
        // const container = document.getElementById("container");
        // let rect = container.getBoundingClientRect();

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
        this.setState({opacity: 0, brightness: "brightness(0%)"});
    }

    componentDidMount() {
        console.log(this.myRef);
    }

    render () {
        const stylesInJS = {
            backgroundStyles: {
                backgroundImage: `url(${koala})`,
                filter: this.state.brightness,
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
                <div id="spotlight" style={stylesInJS.spotlight}></div>
            </div>
        );
    }
}




export default Flashlight;