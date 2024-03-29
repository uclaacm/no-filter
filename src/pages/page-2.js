import '../App.css';
import React, { Component } from "react";
import Flashlight from '../components/Flashlight.js';
import koala from '../img/koala2.jpg';
import flamingo from '../img/flamingo.jpg';
import { Link } from "react-router-dom";

export default class Page2 extends Component {
    render() {
        return (
            <div class="page">
                <section className="blue section">
                    <div className="card">
                        <h1 class="topheader">shining a flashlight on filters</h1>
                        <h2>Can you figure out what's in the image below using the flashlight?</h2>
                        <div id="flashlight-holder">
                            {/* <p style={{alignSelf: 'center', marginRight: '1em',}}>Hover your mouse/finger over the image.</p> */}
                            <Flashlight />
                        </div>
                    </div>
                </section>
                <section className="grey section">

                    <div className="card">
                        <h2>If you guessed a koala: congrats, you're (basically) a CNN!</h2>
                        <div className="grid-50-50">
                            <div className="needs-padding">
                                <p>Think about how you identified the koala:
                                    <ul>
                                        <li>First, you looked at basic <em>features</em> like the koala's eyes and color.</li>
                                        <li>You used these pieces to identify more complicated features like the face and fur texture.</li>
                                        <li>Finally, you combined these features to form a koala.</li>
                                    </ul>
                                </p>
                                <p>Believe it or not, CNNs work the same way! A <em>filter</em> is a matrix that focuses on one tiny area of an
                                  image at a time, just like our flashlight.
                                  This process is called <em>convolution</em>.</p>
                            </div>
                            <div className="center">
                                <img src={koala} alt="A koala on a tree" id="koala-reveal-img"></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blue section">
                    <div className="card">
                        <div className="grid-holder">
                            <img src={flamingo} className="grid-img" alt="A flamingo"></img>
                            <div className="side-text">
                                <h1>fully-connected neural networks</h1>
                                <h2>When you look at this picture, what do you see?</h2>
                                <p>You probably recognized this flamingo instantly.
                                You didn't look at the legs, wings, and beak, but at the whole image.
                                </p>
                                <p>
                                    This is what fully-connected neural networks do.
                                </p>
                                <p>
                                    While fully-connected neural networks look at data as a whole,
                                    CNNs look at data <em>one feature at a time</em>. </p>
                            </div>
                        </div>
                        <div className="center">
                            <p>Before we move on, check out <a className="link-to-slides" href="https://teachla.uclaacm.com/classes/ml/10-cnn" target="_blank" rel="noopener noreferrer">these slides</a> to learn about how filters work.</p>
                        </div>
                    </div>

                </section>
                <div className="navigation">
          <Link to="/1" id="leftB2" className="navArrow">
            back
        </Link>
          <Link to="/3" id="rightB2" className="navArrow">
            next
        </Link>
        </div>
            </div>
        )
    }
}
