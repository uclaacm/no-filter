import React from 'react';
import '../App.css';
import amsterdamRegular from '../img/filter-picker/amsterdam-regular.jpg';
import amsterdamBlur from '../img/filter-picker/amsterdam-blur.png';
import amsterdamBottomSobel from '../img/filter-picker/amsterdam-bottom-sobel.png';
import amsterdamEmboss from '../img/filter-picker/amsterdam-emboss.png';
import amsterdamLeftSobel from '../img/filter-picker/amsterdam-left-sobel.png';
import amsterdamOutline from '../img/filter-picker/amsterdam-outline.png';
import amsterdamRightSobel from '../img/filter-picker/amsterdam-right-sobel.png';
import amsterdamSharpen from '../img/filter-picker/amsterdam-sharpen.png';
import amsterdamTopSobel from '../img/filter-picker/amsterdam-top-sobel.png';



class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'identity',
        };
    }

    //val is string value
    changeImage = val => {
        const filterImage = document.getElementById("filter-applied");
        switch (val) {
            case 'identity':
                filterImage.src = amsterdamRegular;
                break;
            case 'blur':
                filterImage.src = amsterdamBlur;
                break;
            case 'bottom sobel':
                filterImage.src = amsterdamBottomSobel;
                break;
            case 'emboss':
                filterImage.src = amsterdamEmboss;
                break;
            case 'left sobel':
                filterImage.src = amsterdamLeftSobel;
                break;
            case 'outline':
                filterImage.src = amsterdamOutline;
                break;
            case 'right sobel':
                filterImage.src = amsterdamRightSobel;
                break;
            case 'sharpen':
                filterImage.src = amsterdamSharpen;
                break;
            case 'top sobel':
                filterImage.src = amsterdamTopSobel;
                break;
            default:
                break;
        }
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
            <img src={amsterdamRegular} alt="black and white amsterdam" width="500px"></img>
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
            <img id="filter-applied" src={amsterdamRegular} alt="amsterdam with filter applied" width="500px"></img>
        </section>
        
    );
    }
}

export default Filters;