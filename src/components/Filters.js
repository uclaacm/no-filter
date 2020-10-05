import React from 'react';
import '../App.css';
import './style/Filters.css'
import amsterdamRegular from '../img/filter-picker/amsterdam-regular.jpg';
import amsterdamBlur from '../img/filter-picker/amsterdam-blur.jpg';
import amsterdamBottomSobel from '../img/filter-picker/amsterdam-bottom-sobel.jpg';
import amsterdamEmboss from '../img/filter-picker/amsterdam-emboss.jpg';
import amsterdamLeftSobel from '../img/filter-picker/amsterdam-left-sobel.jpg';
import amsterdamOutline from '../img/filter-picker/amsterdam-outline.jpg';
import amsterdamRightSobel from '../img/filter-picker/amsterdam-right-sobel.jpg';
import amsterdamSharpen from '../img/filter-picker/amsterdam-sharpen.jpg';
import amsterdamTopSobel from '../img/filter-picker/amsterdam-top-sobel.jpg';

/*TODO: Change images to koala rather than amsterdam?*/

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'identity',
            src: amsterdamRegular,
            paragraph: <>What do you think the identity filter does?</>,
            filter: [0, 0, 0, 0, 0, 0, 1, 0, 0],
        };
    }

    //val is string value
    changeImage = val => {
        let src = null;
        let paragraph = null;
        let filter = [];
        let sobel = <>The <em>sobel</em> filter detects edges in an image by looking at light-to-dark or dark-to-light pixel differences. How does this sobel filter compare to the other sobel filters?</>;
        switch (val) {
            case 'identity':
                src = amsterdamRegular;
                paragraph = <>What do you think the identity filter does?</>;
                filter = [0, 0, 0, 0, 0, 0, 1, 0, 0];
                break;
            case 'blur':
                src = amsterdamBlur;
                paragraph = <>We can use filters to remove the differences between pixels to <em>blur</em> an image.</>;
                filter = [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625];
                break;
            case 'bottom sobel':
                src = amsterdamBottomSobel;
                paragraph = sobel;
                filter = [-1, -2, -1, 0, 0, 0, 1, 2, 1];
                break;
            case 'emboss':
                src = amsterdamEmboss;
                paragraph = <>The <em>emboss</em> filter emphasizes the difference between pixels. If you look closely, it's actually a sobel filter on a diagonal!</>;
                filter = [-2, -1, 0, -1, 1, 1, 0, 1, 2];
                break;
            case 'left sobel':
                src = amsterdamLeftSobel;
                paragraph=sobel;
                filter = [1, 0, -1, 2, 0, -2, 1, 0, -1];
                break;
            case 'outline':
                src = amsterdamOutline;
                paragraph = <>The <em>outline</em> filter emphasizes <em>large</em> differences between pixels to detect edges.</>;
                filter = [-1, -1, -1, -1, 8, -1, -1, -1, -1];
                break;
            case 'right sobel':
                src = amsterdamRightSobel;
                paragraph = sobel;
                filter = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
                break;
            case 'sharpen':
                src = amsterdamSharpen;
                paragraph = <>The <em>sharpen</em> filter emphasizes small differences between adjacent pixels.</>;
                filter = [0, -1, 0, -1, 5, -1, 0, -1, 0];
                break;
            case 'top sobel':
                src = amsterdamTopSobel;
                paragraph = sobel;
                filter = [1, 2, 1, 0, 0, 0, -1, -2, -1];
                break;
            default:
                break;
        }
        this.setState({
            src: src,
            paragraph: paragraph,
            filter: filter,
        });
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        }, () => {
            this.changeImage(this.state.value);
        });
    }
    
    render() {
    return (
        <section className="section blue">
            <div className="card">
                <h2>Let's see how this works in practice.</h2>
                <p>Select the different filters in this example to apply them to the image. What patterns do you see in the filter values? How do filters make features easier to see?</p>
            </div>
            <div className="filters-holder">
                <img src={amsterdamRegular} alt="black and white amsterdam"></img>
                <div className="card"  id="form">
                    <div className="kernel-matrix">
                        <div className="kernel-row">
                            <div>{this.state.filter[0]}</div>
                            <div>{this.state.filter[1]}</div>
                            <div>{this.state.filter[2]}</div>
                        </div>
                        <div className="kernel-row">
                            <div>{this.state.filter[3]}</div>
                            <div>{this.state.filter[4]}</div>
                            <div>{this.state.filter[5]}</div>
                        </div>
                        <div className="kernel-row">
                            <div>{this.state.filter[6]}</div>
                            <div>{this.state.filter[7]}</div>
                            <div>{this.state.filter[8]}</div>
                        </div>
                    </div>
                    <form className="form-select">
                        <label> Choose a filter:</label>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="identity">Identity</option>
                            <option value="blur">Blur</option>
                            <option value="bottom sobel">Bottom sobel</option>
                            <option value="emboss">Emboss</option>
                            <option value="left sobel">Left sobel</option>
                            <option value="outline">Outline</option>
                            <option value="right sobel">Right sobel</option>
                            <option value="sharpen">Sharpen</option>
                            <option value="top sobel">Top sobel</option>
                        </select>
                    </form>
                </div>
                <img id="filter-applied" src={this.state.src} alt="amsterdam with filter applied"></img>
            </div>
            <div className="card" id="img-description">
                <p>{this.state.paragraph}</p>
                <p className="small-stuff">Thank you to <a href="https://setosa.io/ev/image-kernels/" target="_blank" rel="noopener noreferrer">Explained Visually</a> for this example!</p>
            </div>
        </section>
    );
    }
}

export default Filters;