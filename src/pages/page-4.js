import '../App.css';
import React, { Component } from "react";
import rgbGIF from '../img/rgb.gif';
import Carousel from '../components/Carousel.js';
import depth from '../img/depth.png';
import FilterSizes from '../components/FilterSizes.js';

export default class Page4 extends Component {
    render() {
        return (
            <div class="page">
                <section className="grey section">
                    <div className="card">
                        <h1>breaking it down</h1>
                        <h2>Look at the animation below to learn how a filter (shown as the red matrix) works on images to calculate each element of the feature map</h2>
                        <p>(You can also explore our slides on filters (slide 28) from our <a target="_blank" href="https://docs.google.com/presentation/d/1je-mnp1E6y-wj3q_5GNHG8jJm9ckLTyoFNjF3Qj_6LM/edit?usp=sharing" rel="noopener noreferrer">CNN high-school lesson)</a></p>
                        <p>Note that whenever the filter hovers over a portion of the image, the corresponding element on the
           feature map is calculated by <em>multiplying the filter value of each cell </em> (at the bottom right of each cell) with
           the <em> pixel value of the image's cell it is hovering over </em> and <em>adding them all together.</em></p>
                        <Carousel />
                    </div>
                </section>

                <section className="blue section">
                    <div className="card">
                        <p>The animation above shows the effects of a filter on an image in <em>grayscale</em> (black and white). A grayscale image has a depth of 1 since it just stores the black/white <em>intensity</em> (brightness) of each pixel. </p>
                        <p> But a majority of the images taken today are in color. </p>
                        <p> These images have multiple matrices stacked on top of each other with each matrix containing pixel values for a specific color.
          In an <em> RGB </em> image, for example, there are 3 matrices - red, green, and blue - stacked on top of each other.
          Thus, we say that <em> an RGB image has a depth of 3</em>.
          The topmost channel contains the red intensity values of each pixel, followed by the middle matrix that stores information of the green intensities of each pixel and finally, the last channel that stores information about the blue intensities of each pixel.
          </p>
                        <p> With three channels instead of one, convolution with an RGB image looks like this: </p>
                        <img src={rgbGIF} alt="RGB filter animation" id="filterGIF" style={{ width: '400px' }} />
                    </div>
                </section>
                <section className="grey section">
                    <div className="card grid-holder">
                        <img src={depth} alt="Pixel matrices with depth of 3" className="grid-img" />
                        <div className="side-text">
                            <p>In order to apply our filter to each channel of an <em>RGB</em> (<em>R</em>ed, <em>G</em>reen, <em>B</em>lue) image,
            we need our filter to be 3-dimensional as well&mdash;that is, our filter should have width, height, and depth.
            </p>
                            <p>The width, height and depth of our filter together determine the <em>size</em> of our filter (the dimensions ). In CNNs analyzing RGB images, 3 x 3 x 3 (width x height x depth) filters are some of the most commonly-used filters,
            along with 5 x 5 x 3 filters.</p>
                        </div>
                    </div>
                </section>
                <FilterSizes />
            </div>
        )
    }
}
