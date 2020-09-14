import React, { Component } from "react";
import Slider from "react-slick";
import './style/Carousel.scss';
import f1 from '../img/frames/0.png';
import f2 from '../img/frames/1.png';
import f3 from '../img/frames/2.png';
import f4 from '../img/frames/3.png';
import f5 from '../img/frames/4.png';
import f6 from '../img/frames/5.png';
import f7 from '../img/frames/6.png';
import f8 from '../img/frames/7.png';
import f9 from '../img/frames/8.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';

export default class AutoPlayMethods extends Component {
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
      <div className = "main">
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className = "frames">
            <img src = {f1} className="frame"></img>
          </div>
          <div className = "frames">
            <img src = {f2} className="frame"></img>
          </div>
          <div className = "frames">
            <img src = {f3} className="frame"></img>
          </div>
          <div className = "frames">
            <img src = {f4} className="frame"></img>
          </div>
          <div className = "frames">
            <img src = {f5} className="frame"></img>
          </div>
          <div className = "frames">
            <img src = {f6} className="frame"></img>
          </div>
          <div className = "frames">
            <img src = {f7} className="frame"></img>
          </div>
          <div className = "frames">
            <img src = {f8} className="frame"></img>
          </div>
          <div className = "frames">
            <img src = {f9} className="frame"></img>
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
    );
  }
}