import React from 'react';
import size from '../img/size.png';
import './style/FilterSizes.css';




class FilterSizes extends React.Component {
    //when you hover over a div, all others become visible and text pops up
    hover = event => {
        const popups = document.getElementsByClassName("popup");
        for(let i = 0; i < popups.length; i++) {
            popups[i].style.opacity = 0.9;
        }
        event.target.style.opacity = 0.1;
        switch(event.target.id) {
            case "one":
                document.getElementById("input").style.zIndex = "3";
                document.getElementById("input").style.opacity = 1;
                break;
            case "two":
                document.getElementById("convolve").style.zIndex = "3";
                document.getElementById("convolve").style.opacity = 1;
                break;
            case "three":
                document.getElementById("filters").style.zIndex = "3";
                document.getElementById("filters").style.opacity = 1;
                break;
            case "four":
                document.getElementById("output-separate").style.zIndex = "3";
                document.getElementById("output-separate").style.opacity = 1;
                break;
            case "five":
                document.getElementById("output-together").style.zIndex = "3";
                document.getElementById("output-together").style.opacity = 1;
                break;
            default:
                break;
        }
    }

    //when you leave the div, all divs become transparent
    leave = () => {
        const popups = document.getElementsByClassName("popup");
        const text = document.getElementsByClassName("popup-text-container");
        for(let i = 0; i < popups.length; i++) {
            popups[i].style.opacity = 0;
        }
        for(let i = 0; i < text.length; i++) {
            
            text[i].style.opacity = 0;
            text[i].style.zIndex="auto";
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
                    <div className="popup-text-container" id="input">
                        <p>
                            Notice how our input, a 6 x 6 RGB image, is split into three 6 x 6 layers.
                        </p>
                    </div>
                    <div className="popup-text-container" id="convolve">
                        <p>This is the symbol for convolution. The filters <em>convolve</em> over the image.</p>
                    </div>
                    <div className="popup-text-container" id="filters">
                        <p>
                            Filter 1 and Filter 2 both have three layers. The first layer of each filter
                            convolves over the first layer of the input image, the second layer of each filter convolves over the
                            second layer of the input image, and so on. Then, for each filter, the three resulting matrices are summed up to produce an output of one layer.
                        </p>
                        <p>In order for our outputs to be the same size, Filter 1 and Filter 2 must be the same size as each other.</p>
                    </div>
                    <div className="popup-text-container" id="output-separate">
                        <p>
                            Our 3 x 3 filters can only move along each row of the input image four times until it hits the right side (try working it out yourself!).
                            Similarly, it can only move down a row four times until it hits the bottom, giving our output (also known as a <em>feature map</em>) a size of 4 x 4.

                        </p>
                        <p>If we use filters of bigger sizes, our output matrix will be smaller, and will capture less information.
                            As a result, we should be careful when choosing our filter size.
                        </p>
                    </div>
                    <div className="popup-text-container" id="output-together">
                        <p>
                            Each filter produced an output of size 4 x 4 x 1. We then stack the result of each filter convolution, to produce an output of size 4 x 4 x 2.

                        </p>
                        <p>
                            This output now acts as the input to the next layer of our CNN!
                        </p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default FilterSizes;

