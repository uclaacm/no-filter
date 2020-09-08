import React from 'react';
import size from '../img/size.png';
import './style/FilterSizes.css';




class FilterSizes extends React.Component {
    //when you hover over a div, all others become visible and text pops up
    hover = event => {
        const popups = document.getElementsByClassName("popup");
        for(let i = 0; i < popups.length; i++) {
            popups[i].style.opacity = 0.5;
        }
        event.target.style.opacity = 0.1;
    }

    //when you leave the div, all divs become transparent
    leave = () => {
        const popups = document.getElementsByClassName("popup");
        for(let i = 0; i < popups.length; i++) {
            popups[i].style.opacity = 0;
        }

    }
    render () {
        return (
        <section className = "grey section">
            <div className="card">
                <h2>hover to see what's up</h2>
                <div className="popup-container">
                    <div className="popup" id="one" onMouseEnter={this.hover} onMouseLeave={this.leave}></div>
                    <div className="popup" id="two" onMouseEnter={this.hover} onMouseLeave={this.leave}></div>
                    <div className="popup" id="three" onMouseEnter={this.hover} onMouseLeave={this.leave}></div>
                    <div className="popup filler" id="filler-one"></div>
                    <div className="popup" id="four" onMouseEnter={this.hover} onMouseLeave={this.leave}></div>
                    <div className="popup filler" id="filler-two"></div>
                    <div className="popup" id="five" onMouseEnter={this.hover} onMouseLeave={this.leave}></div>
                    <img src={size} alt="Filters and layers of a CNN" id="size-img"/>
                </div>
            </div>
        </section>
        );
    }
}

export default FilterSizes;

