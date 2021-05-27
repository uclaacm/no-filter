import '../App.css';
import React, { Component } from "react";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

function Visual() {
  const images = [1, 2, 3, 4, 5, 6].map((number) => ({
  src: `https://github.com/uclaacm/no-filter/blob/master/src/img/panels/panel${number}.png`
}));
    return (
      <div className="card">
          <Carousel images={images} id="cnn-vis" />

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
