import React from 'react';
import './App.css';
import Flashlight from './components/Flashlight.js';
import koala from './img/koala2.jpg';
import flamingo from './img/flamingo.jpg';
import Navbar from './components/Navbar.js';
import clipart from './img/people-at-computer.jpg';
import Filters from './components/Filters.js';
import depth from './img/depth.png';
import FilterSizes from './components/FilterSizes.js';

function App() {
  return (
    <div className="App">
    <Navbar />
    <section className="blue section">
      <div className="toc-panel">
        <div className="mini-card">
          <h2>
            Today, we’ll be looking at Convolutional Neural Networks.
            We’ll aim to briefly answer the following three questions:
            <ol>
              <li> What are CNN filters? </li>
              <li> What do filters "see"? </li>
              <li> What are they used for? </li>
            </ol>
          </h2>
        </div>
        <div>
        </div>
        <div className="clipart-container">
        <img id="clipart" src={clipart} alt="People working at a computer." />
        </div>
      </div>
      </section>
      <section className="grey section">
        <div className="card">
        <h2>Some sort of high-level description of CNNs</h2>
        </div>
    </section>
      <section className="blue section">
        <div className="card">
          <h1>Shining a Flashlight on Filters</h1>
          <h2>Can you figure out what's in the image below using the flashlight?</h2>

        </div>
      </section>
      <section className="grey section">
        <div className="card row" id="flashlight-holder">
          <p style={{alignSelf: 'center', marginRight: '1em',}}><em>Hover your mouse/finger over the image.</em></p>
          <Flashlight />
        </div>
      </section>
      <section className="blue section">
        
        <div className="card">
          <img src={koala} alt="koala in a forest" id="koala-reveal-img"></img>
          <h2>If you guessed a koala: congrats, you're (basically) a CNN!</h2>
          <p>Now take a moment to think about how you actually identified the koala. First, you probably looked at each piece—edges,
            the eyes, the nose, etc—individually.
          </p>
          <p>
            Then, you probably put these <em>features</em> together to form bigger structures like the face and the body.
          </p>
          <p>Finally, you were able to combine the larger components to form an answer: koala.</p>
        </div>
      </section>
      <section className="grey section">
        <div className="card">
          <p>Believe it or not, CNNs work the same way! A <em>filter</em> will focus on one tiny area of an
           image at a time, analyzing the picture <em>piece by piece</em>.</p>
           <p><em>Fully-connected neural networks</em> are very different. When you look at the picture below, what do you see?</p>
        </div>
      </section>
      <section className="blue section">
        <div className="card grid-holder">
          <img src={flamingo} className="grid-img" alt="flamingo"></img>
          <div className="side-text">
            <p>You probably recognized this picture as a flamingo instantly.
              You didn't look at the picture as legs, wings, and a beak, but rather looked at the image as a whole.
            </p>
            <p>
              This is what fully-connected neural networks do.
            </p>

          <p>So CNNs are different from fully-connected neural networks because <em>CNNs use filters to analyze
             an image one feature at a time.</em></p>
          {/* NEED TO ADD LINK */}
          <a className="link-to-slides" href="https://www.placeholder.com" target="_blank" rel="noopener noreferrer">Before we move on, check out these slides to learn more about how filters work.</a>
          </div>
        </div>
      </section>
      <section className="grey section">
        <div className="card">
          <h1>How do CNNs use filters to analyze images?</h1>
          <p>
            Filters can be used to modify the value of each pixel in an image.
            This is how Instagram or Snapchat filters work! We'll see what actual CNNs look at in a bit. For now, however, check out how we can use filters and their values to manipulate images
            and make features easier to see.
          </p>
          <p>
            <em>In this example, select different filters to see how their values correspond to the image output. What patterns do you see?</em>
          </p>
        </div>
      </section>
      <Filters />
      <section className="grey section">
        <div className="card">
          <h1>Aman's stuff goes here</h1>
        </div>
      </section>
      <section className="blue section">
        <div className="card grid-holder">
          <img src={depth} alt="Pixel matrices with depth of 3" className="grid-img"/>
          <div className="side-text">
            <p>In order to apply our filter to each channel of an <em>RGB</em> (<em>R</em>ed, <em>G</em>reen, <em>B</em>lue),
            we need our filter to be 3-dimensional as well&mdash;that is, our filter should have length, width, and depth.
            </p>
            <p>This is the <em>size</em> of our filter. In CNNs analyzing RGB images, 3 x 3 x 3 filters are some of the most commonly-used filters,
            along with 5 x 5 x 3 filters.</p>
          </div>
        </div>
      </section>
      <FilterSizes />
    </div>
  );
}

export default App;
