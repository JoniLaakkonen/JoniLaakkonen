import React from "react";
import "./basicTxtCont.css";

const BasicTxtContainer = () => {
    return (
        <main id="BTC-section">
          <h1 id="header">Hello, I am Joni</h1> 
          <div className="BTC-content">
            <article className="text-cntr">
                <p className="BTC-text">
                I’m a full-stack developer with a background in Computer Science from Karelia University of Applied Sciences, currently seeking a software developer position where I can continue to grow and deepen my technical expertise.
                </p>
            </article>

            <article className="text-cntr" id="Bo2">
                <p className="BTC-text">
                I’m a calm, easy-going, and communicative person who takes pride in always getting the job done. When I commit to something, I give it my full effort — sometimes to the point of being a bit of a workaholic — because I care about delivering quality results and doing things right.
                </p>
            </article>

            <article className="text-cntr" >
                <p className="BTC-text">
                Currently, my main focus is strengthening my back-end development and cybersecurity skills. My goal is to grow into a well-rounded developer — someone who understands systems from top to bottom and can confidently solve problems across the entire stack like a wizard.
                </p>
            </article>
          </div>
        </main>
    );
  }
  export default BasicTxtContainer;