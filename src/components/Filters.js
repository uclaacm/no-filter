import React from 'react';
import '../App.css';
import './style/Filters.css'
import elephantRegular from '../img/filter-picker/elephant_regular-min.jpg';
import elephantBlur from '../img/filter-picker/elephant_blur-min.jpg';
import elephantBottomSobel from '../img/filter-picker/elephant_bottom_s-min.jpg';
import elephantEmboss from '../img/filter-picker/elephant_emboss-min.jpg';
import elephantLeftSobel from '../img/filter-picker/elephant_left_s-min.jpg';
import elephantOutline from '../img/filter-picker/elephant_outline-min.jpg';
import elephantRightSobel from '../img/filter-picker/elephant_right_sobel-min.jpg';
import elephantSharpen from '../img/filter-picker/elephant_sharpen-min.jpg';
import elephantTopSobel from '../img/filter-picker/elephant_top_sobel-min.jpg';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'identity',
            src: elephantRegular,
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
                src = elephantRegular;
                paragraph = <>What do you think the identity filter does?</>;
                filter = [0, 0, 0, 0, 0, 0, 1, 0, 0];
                break;
            case 'blur':
                src = elephantBlur;
                paragraph = <>We can use filters to remove the differences between pixels to <em>blur</em> an image.</>;
                filter = [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625];
                break;
            case 'bottom sobel':
                src = elephantBottomSobel;
                paragraph = sobel;
                filter = [-1, -2, -1, 0, 0, 0, 1, 2, 1];
                break;
            case 'emboss':
                src = elephantEmboss;
                paragraph = <>The <em>emboss</em> filter emphasizes the difference between pixels. If you look closely, it's actually a sobel filter on a diagonal!</>;
                filter = [-2, -1, 0, -1, 1, 1, 0, 1, 2];
                break;
            case 'left sobel':
                src = elephantLeftSobel;
                paragraph=sobel;
                filter = [1, 0, -1, 2, 0, -2, 1, 0, -1];
                break;
            case 'outline':
                src = elephantOutline;
                paragraph = <>The <em>outline</em> filter emphasizes <em>large</em> differences between pixels to detect edges.</>;
                filter = [-1, -1, -1, -1, 8, -1, -1, -1, -1];
                break;
            case 'right sobel':
                src = elephantRightSobel;
                paragraph = sobel;
                filter = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
                break;
            case 'sharpen':
                src = elephantSharpen;
                paragraph = <>The <em>sharpen</em> filter emphasizes small differences between adjacent pixels.</>;
                filter = [0, -1, 0, -1, 5, -1, 0, -1, 0];
                break;
            case 'top sobel':
                src = elephantTopSobel;
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
                <img src={elephantRegular} alt="black and white elephant"></img>
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
                <img id="filter-applied" src={this.state.src} alt="elephant with filter applied"></img>
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