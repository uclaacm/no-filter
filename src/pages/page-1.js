import '../App.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Page1 extends Component {
        render() {
            return (
                <div class="page">
                    <section className="banner">
                        <h1>#FFFFFF in the chat</h1>
                    </section>
                    <div class="index">
                        <Link to="/1" className="navButton">
                            Page 1
                        </Link>
                        <Link to="/2" className="navButton">
                            Page 2
                        </Link>
                        <Link to="/3" className="navButton">
                            Page 3
                        </Link>
                        <Link to="/4" className="navButton">
                            Page 4
                        </Link>
                        <Link to="/5" className="navButton">
                            Page 5
                        </Link>
                    </div>

                    <section className="blue section">
                        <div className="toc-panel">
                            <div className="mini-card">
                                <h1>
                                    Let's learn about Convolutional Neural Networks!
                                </h1>
                                <ol>
                                    <li> What are CNN <em>filters</em>?</li>
                                    <li> What do filters <em>"see"</em>?</li>
                                    <li> What do CNNs look like? </li>
                                </ol>
                            </div>
                            <div className="clipart-container">
                            </div>
                        </div>
                    </section>
                    <section className="grey section">
                        <div className="card">
                            <h1>First, Neural Networks</h1>
                            <div className="grid-60-40">
                                <div className="words">
                                    <p>Maybe you've heard about neural networks. If you haven't, <em>check out the linked slides.</em>
                                    </p>
                                    <p>Neural networks can:
                <ul className="list">
                                            <li>Predict stock market prices</li>
                                            <li>Analyze your voice</li>
                                            <li>Find differences between cats and dogs</li>
                                        </ul>
                                    </p>
                                    <p>
                                        <em>Convolutional Neural Networks</em>, or CNNs, are a type of neural network.
              They find <em>features</em> by analyzing data (like images) <em>piece by piece</em>.
              </p>
                                    <p> In this learning lab, we'll learn about how that works.</p>
                                </div>
                                <div className="links">
                                    <a className="chubby-link" href="https://teachla.uclaacm.com/classes/ml/08-fc-neural-networks" target="_blank" rel="noopener noreferrer">Fully-connected neural networks</a>
                                    <a className="chubby-link" href="https://teachla.uclaacm.com/classes/ml/10-cnn" target="_blank" rel="noopener noreferrer">Convolutional neural networks</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
}