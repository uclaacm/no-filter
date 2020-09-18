import React from 'react';
import size from '../img/size.png';
import './style/FilterSizes.css';



class FilterSizes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: false,
            clicked: [false, false, false, false, false],
        };
    }

    changeText = (text, key) => {
        let arr = [false, false, false, false, false];
        arr[key] = true;
        this.setState({text: text, clicked: arr});
    }
    
    render () {
        let params = [ //text, style.top, style.left
            [<p>Notice how our input, a 6 x 6 RGB image, is split into three 6 x 6 layers.</p>, "90%", "19%"],
            [<p>This is the symbol for convolution. The filters <em>convolve</em> over the image.</p>, "54%", "34.75%"],
            [<><p>
                Filter 1 and Filter 2 both have three layers. The first layer of each filter
                convolves over the first layer of the input image, the second layer of each filter convolves over the
                second layer of the input image, and so on. Then, for each filter, the three resulting matrices are summed up to produce an output of one layer.
                </p>
                <p>In order for our outputs to be the same size, Filter 1 and Filter 2 must be the same size as each other.</p></>, "47%", "47%"],
            [<><p>
                Our 3 x 3 filters can only move along each row of the input image four times until it hits the right side (try working it out yourself!).
                Similarly, it can only move down a row four times until it hits the bottom, giving our output (also known as a <em>feature map</em>) a size of 4 x 4.
            </p>
            <p>If we use filters of bigger sizes, our output matrix will be smaller, and will capture less information.
                As a result, we should be careful when choosing our filter size.
            </p></>, "47%", "61.5%"], 
            [<><p>
                Each filter produced an output of size 4 x 4 x 1. We then stack the result of each filter convolution, to produce an output of size 4 x 4 x 2.
            </p>
            <p>
                This output now acts as the input to the next layer of our CNN!
            </p> </>, "78%", "81%"]
        ];
        
        const buttons = params.map((val, index) => {
            let className = this.state.clicked[index] ? " clicked" : "";
            return <button className={`button${className}`}
                    style={{top: val[1], left: val[2]}} 
                    onClick={() => this.changeText(val[0], index)} 
                    key={index}>
                </button>
        });
        return (
        <section className = "blue section">
            <div className="card">
                <h2>click to see what's up</h2>
                <div className="more-filters-container">
                    <img src={size} alt="Filters and layers of a CNN" id="size-img"/>
                    {buttons}
                </div>
                {this.state.text &&
                    <div className="speech-bubble">{this.state.text}</div>
                }
            </div>
        </section>
        );
    }
}

export default FilterSizes;

