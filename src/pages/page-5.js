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
                        <h2>idk put something here</h2>
                    </div>
                </section>
            </div>
        )
    }
}