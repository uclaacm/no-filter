import '../App.css';
import React, { Component } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import visualizer from '../img/cnn-vis.png';

function Visual() {
    const handle = useFullScreenHandle();
    return (
        <div className="card">
            <button id="fullscreen" onClick={handle.enter}>
                View full image
                        </button>
            <FullScreen handle={handle}>
                <div className="cnnHolder">
                    <img src={visualizer} id="cnn-vis" alt="two filters applied to one layer of a CNN" />
                </div>
            </FullScreen>
        </div>

    )
}

export default class Page5 extends Component {
    render() {
        return (
            <div class="page">
                <section className="grey section">
                    <div className="card">
                        <h1>What do CNNs look like?</h1>
                        <p>
                            Now that we know how to apply filters, let's take a look at how one layer of a CNN might use two feature-detecting filters to create feature maps.
                        </p>
                    </div>
                </section>
                <section className="blue section">
                    <Visual />
                </section>
                <section className="section">
                    <div className="card">
                        <h1>In conclusion...</h1>
                        <h2>Let's revisit our three questions.</h2>
                        <ol>
                            <h2><li> What are CNN <em>filters</em>?</li></h2>
                            <p>Remember the koala example? CNN filters act like flashlights.</p> 
                            <p>They move around an image to recognize what it is.</p>
                            <p>Go back to &lt; insert link here &gt; Shining a Flashlight on filters if you want to learn more! </p>
                            <h2><li> What do filters <em>"see"</em>?</li></h2>
                            <p>Filters look at <em>pixels</em> ane perform calculations.</p>
                            <p>They "see" things like your face, and calculate values to put a Snapchat filter on your selfie.</p>
                            <p>Check out &lt; insert link here &gt; How do we use filters to analyze images for more!</p>
                            <h2><li> What do CNNs look like? </li></h2>
                            <p>CNNs look like a network of filters and images, with images as inputs, filters as 'functions' and images as outputs.</p>
                            <p>Check out visual representations of CNNs in CNN Sizes and What do CNNs Look Like?</p>
                        </ol>
                        <h2>Goodbye for now!</h2>
                        <p>We hope you enjoyed our learning lab! If you have any feedback, please leave it here.</p>
                        <p>made with love by ACM AI and ACM Teach LA</p>
                    </div>
                </section>
            </div>
        )
    }
}