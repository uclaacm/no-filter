import React from 'react';
import './App.css';
import Flashlight from './components/Flashlight.js';
import flamingo from './img/flamingo.jpg';


function App() {
  return (
    <div className="App">
      <section class="blue section">
        <div class="card">
          <h1>Shining a Flashlight on CNNs</h1>
          <h2>Can you figure out what's in the image below using the flashlight?</h2>
          
        </div>
      </section>
      <section class="grey section">
        <div class="card row" id="flashlight-holder">
          <p style={{alignSelf: 'center'}}><em>Hover your mouse/finger over the image.</em></p>
          <Flashlight />
        </div>
      </section>
      <section class="blue section">
        <div class="card">
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
      <section class="grey section">
        <div class="card">
          <p>Believe it or not, CNNs work the same way! A <em>filter</em> will focus on one tiny area of an
           image at a time, analyzing the picture <em>piece by piece</em>.</p>
           <p><em>Fully-connected neural networks</em> are very different. When you look at the picture below, what do you see?</p>
        </div>
      </section>
      <section class="blue section">
        <div class="card" id="flamingo-holder">
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
      <section class="grey section">
        <div class="card">
          <p>So CNNs are different from fully-connected neural networks because CNNs use filters to analyze
             an image one feature at a time.</p>
             <h2>But how do filters actually work?</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
