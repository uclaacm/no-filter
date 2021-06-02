import '../App.css';
import React, { Component } from "react";
import stocks from '../img/stock.svg';
import voice from '../img/voice.svg';
import catdog from '../img/catdog.svg';


export default class Page1 extends Component {
        render() {
            return (
                <div class="page">
                    <section className="grey section">
                        <div className="card">
                            <h1>first, neural networks</h1>
                                <div className="words">
                                    <p>Maybe you've heard about neural networks. If you haven't, <em>check out the slides below.</em>
                                    </p>
                                    <div className="links">
                                        <a className="dark-link" href="https://teachla.uclaacm.com/classes/ml/08-fc-neural-networks" target="_blank" rel="noopener noreferrer">fully-connected neural networks</a>
                                        <a className="dark-link" href="https://teachla.uclaacm.com/classes/ml/10-cnn" target="_blank" rel="noopener noreferrer">convolutional neural networks</a>
                                    </div>
                                    <p>Neural networks can:
                                    <div className="example-list">
                                            <div className="example">predict stock market prices
                                            <img src={stocks} alt="stocks" id="example-img"></img>
                                            </div>
                                            <div className="example">analyze your voice
                                            <img src={voice} alt="sound wave" id="example-img-soundwave"></img>
                                            </div>
                                            <div className="example">find differences <br /> between cats & dogs
                                            <img src={catdog} alt="pawprint" id="example-img"></img>
                                            </div>
                                        </div>
                                    </p>
                                    <p>
                                        <em>Convolutional Neural Networks</em>, or CNNs, are a type of neural network.
              They find features by analyzing data (like images) piece by piece.
              </p>
                                    <p> In this lab, we'll learn about how that works.</p>
                                </div>
                        </div>
                    </section>
                </div>
            )
        }
}
