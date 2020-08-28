import React from 'react';
import './App.css';
import Flashlight from './components/Flashlight.js';
import koala from './img/koala2.jpg';
import flamingo from './img/flamingo.jpg';
import Navbar from './components/Navbar.js';
import clipart from './img/people-at-computer.jpg';
import Filters from './components/Filters.js';


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
              <li> What are CNNs? </li>
              <li> How do they work? </li>
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
          <h1>Shining a Flashlight on CNNs</h1>
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
        <div className="card" id="flamingo-holder">
          <img src={flamingo} id="flamingo" alt="flamingo"></img>
          <div id="side-text">
            <p>You probably recognized this picture as a flamingo instantly.
              You didn't look at the picture as legs, wings, and a beak, but rather looked at the image as a whole.
            </p>
            <p>
              This is what fully-connected neural networks do.
            </p>
          </div>
        </div>
      </section>
      <section className="grey section">
        <div className="card">
          <p>So CNNs are different from fully-connected neural networks because <em>CNNs use filters to analyze
             an image one feature at a time.</em></p>
          {/* NEED TO ADD LINK */}
          <a className="link-to-slides" href="https://www.placeholder.com" target="_blank" rel="noopener noreferrer">Before we move on, check out these slides to learn more about how filters work.</a>
          <h2>But what do filters look at?</h2>
        </div>
      </section>
      <section className="blue section">
        <div className="card">
          <h2>That's a good question!</h2>
          <p>Filters look at whatever they want to see, by identifying patterns and <em>features</em> through gradient descent. We'll see what an actual CNN looks at in a bit.
            Usually, however, filters check out things like edges and colors first, then more complicated features like textures and faces.
            Think about the koala!
          </p>
          <p>
            In this example, check out how filter values correspond to the image output. What patterns do you see?
          </p>
        </div>
      </section>
      <Filters />
    </div>
  );
}

export default App;
