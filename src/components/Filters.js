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



class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'identity',
            src: amsterdamRegular,
            paragraph: <>What do you think the identity filter does?</>,
        };
    }

    //val is string value
    changeImage = val => {
        // const filterImage = document.getElementById("filter-applied");
        // const description = document.getElementById("img-description")
        let src = null;
        let paragraph = null;
        switch (val) {
            case 'identity':
                src = amsterdamRegular;
                paragraph = <>What do you think the identity filter does?</>;
                break;
            case 'blur':
                src = amsterdamBlur;
                paragraph = <>We can use filters to remove the differences between pixels to <em>blur</em> an image.</>;
                break;
            case 'bottom sobel':
                src = amsterdamBottomSobel;
                paragraph = <>The <em>sobel</em> filter detects edges in an image.</>;
                break;
            case 'emboss':
                src = amsterdamEmboss;
                paragraph = <>The <em>emboss</em> filter emphasizes the difference between pixels.</>;
                break;
            case 'left sobel':
                src = amsterdamLeftSobel;
                paragraph = <>The <em>sobel</em> filter detects edges in an image.</>;
                break;
            case 'outline':
                src = amsterdamOutline;
                paragraph = <>The <em>outline</em> filter emphasizes <em>large</em> differences between pixels to detect edges.</>;
                break;
            case 'right sobel':
                src = amsterdamRightSobel;
                paragraph = <>The <em>sobel</em> filter detects edges in an image.</>;
                break;
            case 'sharpen':
                src = amsterdamSharpen;
                paragraph = <>The <em>sharpen</em> filter emphasizes small differences between adjacent pixels.</>;
                break;
            case 'top sobel':
                src = amsterdamTopSobel;
                paragraph = <>The <em>sobel</em> filter detects edges in an image.</>;
                break;
            default:
                break;
        }
        this.setState({
            src: src,
            paragraph: paragraph,
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
        <section className="section blue filters-holder">
            
            <img src={amsterdamRegular} alt="black and white amsterdam" width="500px"></img>
            <div className="card"  id="form">
            <form>
                <label>
                    Choose a filter:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option selected value="identity">Identity</option>
                        <option value="blur">Blur</option>
                        <option value="bottom sobel">Bottom sobel</option>
                        <option value="emboss">Emboss</option>
                        <option value="left sobel">Left sobel</option>
                        <option value="outline">Outline</option>
                        <option value="right sobel">Right sobel</option>
                        <option value="sharpen">Sharpen</option>
                        <option value="top sobel">Top sobel</option>
                    </select>
                </label>
            </form>

            </div>
            
            
            <img id="filter-applied" src={this.state.src} alt="amsterdam with filter applied" width="500px"></img>
            <div className="card" id="img-description">
                <p>{this.state.paragraph}</p>
            </div>
        </section>
    );
    }
}

export default Filters;