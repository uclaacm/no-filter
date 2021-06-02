import '../App.css';
import React, { Component } from "react";
import rgbGIF from '../img/rgb.gif';
import Carousel from '../components/Carousel.js';
import depth from '../img/depth.png';
import FilterSizes from '../components/FilterSizes.js';
import { Link } from "react-router-dom";

export default class Page4 extends Component {
    render() {
        return (
            <div class="page">
                <section className="grey section">
                    <div className="card">
                        <h1 class="topheader">breaking it down</h1>
                        <h2>Let's learn how a filter calculates values.</h2>
                        <p>Whenever the filter hovers over a portion of the image, the corresponding element on the
           feature map is calculated by <em>multiplying</em> the filter value of each cell with
           the <em> pixel value </em> of the cell and <em>adding</em> them all together.</p>
           <br></br>
                        <Carousel />
                    </div>
                </section>

                <section className="blue section">
                    <div className="card">
                        <p>The animation above shows the effects of a filter on an image in <em>grayscale</em>. A grayscale image has a depth of 1 since it just stores the black/white <em>intensity</em> of each pixel. </p>
                        <p> But a majority of the images taken today are in color. These images usually have multiple matrices.</p>
                        <p> In an <em> RGB </em> (<em>R</em>ed, <em>G</em>reen, <em>B</em>lue) image, for example, there are 3 matrices - red, green, and blue - stacked on top of each other.
          Thus, we say that an RGB image has a <em> depth </em>of 3.
          The first layer contains the red values of each pixel, the second layer contains green values, and the third layer contains blue values.
          </p>
                        <p> With three layers instead of one, convolution with an RGB image looks like this: </p>
                        <br></br>
                        <img src={rgbGIF} alt="RGB filter animation" id="filterGIF" style={{ width: '400px' }} />
                    </div>
                </section>
                <section className="grey section">
                    <div className="card grid-holder">
                        <img src={depth} alt="Pixel matrices with depth of 3" className="grid-img" />
                        <div className="side-text">
                            <p>In order to apply our filter to each layer of an RGB image,
            we need our filter to be 3-dimensional too.
            </p>
                            <p>The width, height and depth of our filter make up its <em>size</em>. In CNNs analyzing RGB images, 3 x 3 x 3 (width x height x depth) filters are some of the most commonly-used filters.</p>
                        </div>
                    </div>
                </section>
                <FilterSizes />
                <div className="navigation">
          <Link to="/3" id="leftB2" className="navArrow">
            back
        </Link>
          <Link to="/5" id="rightB2" className="navArrow">
            next
        </Link>
        </div>
            </div>
        )
    }
}
