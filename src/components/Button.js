import React from 'react';
import './style/FilterSizes.css';

// there will be multiple buttons throughout the container.
//when a button is hovered over, a text bubble pops up in some location.
// keep track of if it is being hovered

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        }
    }

    handleHover = () => {
        this.setState({isHovered: true});
    }

    handleExit = () => {
        this.setState({isHovered: false});
    }

    render () {
        return (
            <>
                <div className="button" style={{top: this.props.buttonTop, left: this.props.buttonLeft}} onMouseEnter={this.handleHover} onMouseLeave={this.handleExit}></div>
                {
                    this.state.isHovered && 
                    <div className="speech-bubble" style={{top: this.props.bubbleTop, left: this.props.bubbleLeft,}}>
                        {this.props.text}
                    </div>
                }   
            </>
        );
    }

}

export default Button;