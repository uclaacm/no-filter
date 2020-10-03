import React from 'react';
import './App.css';
import Flashlight from './components/Flashlight.js';
import koala from './img/koala2.jpg';
import flamingo from './img/flamingo.jpg';
import Navbar from './components/Navbar.js';
import clipart from './img/people.png';
import sentimentAnalysis from './img/undraw_sentiment_analysis.svg';
import Filters from './components/Filters.js';
import depth from './img/depth.png';
import FilterSizes from './components/FilterSizes.js';
import visualizer from './img/cnn-vis.png';
import Magnifier from "react-magnifier";
import Carousel from './components/Carousel.js';

function App() {
  return (
    <div className="App">
    <Navbar />
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
        <img id="clipart" src={clipart} alt="People working at a computer." />
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
      <section className="blue section">
        <div className="card">
          <h1>Shining a Flashlight on Filters</h1>
          <h2>Can you figure out what's in the image below using the flashlight?</h2>
          <div id="flashlight-holder">
            <p style={{alignSelf: 'center', marginRight: '1em',}}>Hover your mouse/finger over the image.</p>
            <Flashlight />
          </div>
        </div>
      </section>
      <section className="grey section">

        <div className="card">
          <h2>If you guessed a koala: congrats, you're (basically) a CNN!</h2>
          <div className="grid-50-50">
            <div>
              <p>Think about how you identified the koala:
                <ul>
                  <li>First, you looked at pieces like the koala's eyes and color.</li>
                  <li>You used these pieces to identify <em>features</em> like the face and fur texture.</li>
                  <li>Finally, you combined these features to form a koala.</li>
                </ul>
              </p>
              <p>Believe it or not, CNNs work the same way! A <em>filter</em> will focus on one tiny area of an
                image at a time and analyzes the picture piece by piece.
                This process is called <em>convolution</em>.</p>
            </div>
            <div className="center">
              <img src={koala} alt="koala in a forest" id="koala-reveal-img"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="blue section">
        <div className="card">
          <h1>Fully-connected Neural Networks</h1>
          <h2>When you look at the picture below, what do you see?</h2>
          <div className="grid-holder">
          <img src={flamingo} className="grid-img" alt="flamingo"></img>
          <div className="side-text">
            <p>You probably recognized this flamingo instantly.
              You didn't look at the legs, wings, and beak, but at the whole image.
            </p>
            <p>
              This is what fully-connected neural networks do.
            </p>
            <p>
              While fully-connected neural networks look at data as a whole,
              CNNs look at data <em>one feature at a time</em>. </p>
            <p>Before we move on, check out <a className="link-to-slides" href="https://teachla.uclaacm.com/classes/ml/10-cnn" target="_blank" rel="noopener noreferrer">these slides</a> to learn about how filters work.</p>
          
          </div>
          </div>
        </div>
      </section>
      <section className="grey section">
        <div className="card">
          <h1>How do we use filters to analyze images?</h1>
          <div className="row filters-intro">
            <div>
              <p>Filters modify the value of each <em>pixel</em> in an image.</p>
              <p>We see filters used in:
                <ul>
                  <li>Instagram/Snapchat filters</li>
                  <li>Photoshop effects</li>
                  <li>Editing/synthesizing music</li>
                </ul>
              </p>
              <p>How can we use filters and their values to manipulate images? </p>
            </div>
            <div className="sentiment-holder">
              <img src={sentimentAnalysis} alt="Guy looking at selfie" id="sentiment-analysis"/>
            </div>
          </div>
        </div>
      </section>
      <Filters />
      <section className="grey section">
        <div className="card">
          <h2 style={{textAlign:"center"}}>Look at the animation below to learn how a filter (shown as the red matrix) works on images to calculate each element of the feature map</h2>
        <Carousel/>
        </div>
      </section>

      <section className="blue section">
        <div className="card">
          <p>
          The animation abvove shows the effects of a filter on an image in <b>grayscale</b>. A grayscale image has a depth of 1 since it just stores the black/white intensity information of each pixel. 
          A majority of the images taken today are in color. 
          These images have multiple matrices stacked on top of each other with each matrix containing pixel values for a specific color. 
          In an RGB image, for example, there are 3 matrices stacked on top of each other. <b>Thus, we say that an RGB image has a depth of 3.</b> The topmost layer contains the red intensity values of each pixel, followed by the middle matrix that stores information of the green intensities of each pixel and finally, the last layer that stores information about the blue intensities of each pixel.
          </p>
        </div>
      </section>
      <section className="grey section">
        <div className="card grid-holder">
          <img src={depth} alt="Pixel matrices with depth of 3" className="grid-img"/>
          <div className="side-text">
            <p>In order to apply our filter to each channel of an <em>RGB</em> (<em>R</em>ed, <em>G</em>reen, <em>B</em>lue) image,
            we need our filter to be 3-dimensional as well&mdash;that is, our filter should have length, width, and depth.
            </p>
            <p>This is the <em>size</em> of our filter. In CNNs analyzing RGB images, 3 x 3 x 3 filters are some of the most commonly-used filters,
            along with 5 x 5 x 3 filters.</p>
          </div>
        </div>
      </section>
      <FilterSizes />
      <section className="blue section">
        <div className="card">
          <h1>placeholder bc the colors are changing</h1>
        </div>
      </section>
      <section className="grey section">
        <div className="card">
          <h1>What do CNNs look like?</h1>
          <p>
            Now that we know how to apply filters, let's take a look at how one layer of a CNN might use two feature-detecting filters to create feature maps.
          </p>
        </div>
      </section>
      <section className="blue section">
      <div className="card">
       <Magnifier src={visualizer} id="cnn-vis" mgShape="square" mgWidth={100} mgHeight={100} zoomFactor="1.5" mgShowOverflow="false" alt="two filters applied to one layer of a CNN"/>
       </div>
       </section>

    </div>
  );
}

export default App;
