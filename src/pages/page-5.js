import '../App.css';
import React, { Component } from "react";
import Slider from "react-slick";
import '../components/style/Carousel.scss';
import f1 from '../img/panels/panel1.png';
import f2 from '../img/panels/panel2.png';
import f3 from '../img/panels/panel3.png';
import f4 from '../img/panels/panel4.png';
import f5 from '../img/panels/panel5.png';
import f6 from '../img/panels/panel6.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';

export default class Page5 extends Component {
    constructor(props) {
      super(props);
      this.play = this.play.bind(this);
      this.pause = this.pause.bind(this);
    }
    play() {
      this.slider.slickPlay();
    }
    pause() {
      this.slider.slickPause();
    }
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      };
      return (
        <div className = "page">
            <section className="section">
                  <div className="card">
                      <h1>What do CNNs look like?</h1>
                      <p>
                          Now that we know how to apply filters, let's take a look at how one layer of a CNN might use two feature-detecting filters to create feature maps.
                      </p>
                  </div>
                  <div className="card">
                    <div className="main2">
                      <Slider ref={slider => (this.slider = slider)} {...settings}>
                        <div className = "frames gallery">
                          <img src = {f1} className="frame" id="cnn-frame" alt="first step"></img>
                        </div>
                        <div className = "frames gallery">
                          <img src = {f2} className="frame" id="cnn-frame" alt="second step"></img>
                        </div>
                        <div className = "frames gallery">
                          <img src = {f3} className="frame" id="cnn-frame" alt="third step"></img>
                        </div>
                        <div className = "frames gallery">
                          <img src = {f4} className="frame" id="cnn-frame" alt="fourth step"></img>
                        </div>
                        <div className = "frames gallery">
                          <img src = {f5} className="frame" id="cnn-frame" alt="fifth step"></img>
                        </div>
                        <div className = "frames gallery">
                          <img src = {f6} className="frame" id="cnn-frame" alt="sixth step: complete!"></img>
                        </div>
                      </Slider>

                      <div style={{ textAlign: "center" }}>
                        <button className="cbutton" onClick={this.play}>
                          <FontAwesomeIcon icon={faPlay} className ="cicon"/>
                        </button>
                        <button className="cbutton" onClick={this.pause}>
                          <FontAwesomeIcon icon={faPause} className="cicon"/>
                        </button>
                        </div>
                    </div>
                  </div>
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
      );
    }
}
