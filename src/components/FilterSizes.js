import React from 'react';
import size from '../img/size.png';
import './style/FilterSizes.css';


/*TODO: Make paragraphs less verbose*/
const paragraphs = [
    <p>Notice how our input, a 6 x 6 RGB image, is split into three 6 x 6 layers.</p>,
    <p>This is the symbol for convolution. The filters <em>convolve</em> over the image.</p>,
    <><p>
        Filter 1 and Filter 2 both have three layers. The first layer of each filter
        convolves over the first layer of the input image, the second layer of each filter convolves over the
        second layer of the input image, and so on. Then, for each filter, the three resulting matrices are summed up to produce an output of one layer.
        </p>
        <p>In order for our outputs to be the same size, Filter 1 and Filter 2 must be the same size as each other.</p></>,
    <><p>
        Our 3 x 3 filters can only move along each row of the input image four times until it hits the right side (try working it out yourself!).
        Similarly, it can only move down a row four times until it hits the bottom, giving our output (also known as a <em>feature map</em>) a size of 4 x 4.
    </p>
    <p>If we use filters of bigger sizes, our output matrix will be smaller, and will capture less information.
        As a result, we should be careful when choosing our filter size.
    </p></>,
    <><p>
        Each filter produced an output of size 4 x 4 x 1. We then stack the result of each filter convolution, to produce an output of size 4 x 4 x 2.
    </p>
    <p>
        This output now acts as the input to the next layer of our CNN!
    </p> </>
];

class FilterSizes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: null,
            text: false,
            selected: [false, false, false, false, false],
        };
    }

    clickStart = () => {
        this.setState({index: 0}, () => {
            this.changeText();
        });
    }

    clickNext = () => {
        if (this.state.index < 4) {
            this.setState((prevState) => {
                return {index: prevState.index +1};
            }, () => {
                this.changeText();
            });
        }
    }

    clickBack = () => {
        if (this.state.index > 0) {
            this.setState((prevState) => {
                return {index: prevState.index - 1};
            }, () => {
                this.changeText();
            });
        }
    }

    changeText = () => {
        let selected = [false, false, false, false, false];
        selected[this.state.index] = true;
        this.setState({text: paragraphs[this.state.index], selected: selected});
    }

    render () {
        let params = [ //style.top, style.left
            ["80%", "22%"],
            ["54%", "36%"],
            ["45%", "45%"],
            ["45%", "61.5%"],
            ["70%", "79%"]
        ];

        const numbers = params.map((val, index) => {
            let className = this.state.selected[index] ? " selected" : "";
            return <div className={`number${className}`}
                    style={{top: val[0], left: val[1]}}
                    key={index}>{index+1}</div>
        });
        let showBack = this.state.index > 0 ? "" : " transparent"; //if false, ONLY show next
        let showNext = this.state.index < 4 ? "" : " transparent"; // if false, ONLY show back
        return (
        <section className = "blue section">
            <div className="card">
                <h1>CNN sizes</h1>
                <h2>Use the buttons below to find out more about filter and CNN sizes.</h2>
                <div className="more-filters-container">
                    <img src={size} alt="A feature map is calculated by convolving a filter over an image. You can create multiple feature maps by using multiple features." id="size-img"/>
                    {numbers}
                </div>
                <div className="lots-of-buttons">
                    {this.state.index === null ?
                        <button className="more-filters-button" onClick={() => this.clickStart()}>Start</button>
                        :
                        /*back button only shows if we're on buttons 2-5 (1-indexed),
                        next button only shows on buttons 1-4*/
                        <>
                        <button className={`more-filters-button${showBack}`} onClick={() => this.clickBack()}>Back</button>
                        <button className={`more-filters-button${showNext}`} onClick={() => this.clickNext()}>Next</button>
                        </>
                    }
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
