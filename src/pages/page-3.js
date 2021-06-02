import '../App.css';
import React, { Component } from "react";
import Filters from '../components/Filters.js';
import filterGIF from '../img/filter.gif';

export default class Page3 extends Component {
    render() {
        return (
            <div class="page">
                <section className="grey section">
                    <div className="card">
                        <h1 class="topheader">how do we use filters to analyze images?</h1>
                        <div className="row filters-intro">
                            <div>
                                <p>So far, we've learned that filters are matrices that analyze images piece-by-piece.</p>
                                <p>Filters are used in:
                <ul>
                                        <li>Instagram/Snapchat filters</li>
                                        <li>Photoshop effects</li>
                                        <li>Editing/synthesizing music</li>
                                    </ul>
                                </p>
                                <h2>How do these filters actually work? </h2>
                            </div>
                            <div>

                                <p>Filters manipulate images by modifying the values of <em>pixels</em>, which are the tiniest units of brightness or color that make up an image.</p>
                                <p> Filters look at one small clump of pixels at a time, slowly revolving around the entire image (remember, this process is called <em>convolution</em>).
              The output of a convolution is called a <em>feature map</em>.</p>
                                <div className="filterGIF-holder">
                                    <img src={filterGIF} alt="Filter animation" id="filterGIF" />
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
                <Filters />
            </div>
        )
    }
}
