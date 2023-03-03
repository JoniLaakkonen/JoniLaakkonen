import React from "react";
import "./basicTxtCont.css";

const BasicTxtContainer = () => {
    return (
        <main id="BTC-section">
          <h1 id="header">Hello, I am Joni</h1> 
          <div className="BTC-content">
            <article className="text-cntr">
                <p className="BTC-text">
                I am Computer sciences student in Karelia University of applied sciences, 
                studying at 3rd year. I am looking for job positioning as software developer intern.
                </p>
            </article>

            <article className="text-cntr" id="Bo2">
                <p className="BTC-text">
                As a person I am chill and chatty. I always get my jobs done no matter what 
                and I always ensure that I have given my all to it.
                </p>
            </article>

            <article className="text-cntr">
                <p className="BTC-text">
                In school we have studied a lot of programming. We have also studied some robotics 
                and automation, big data, some cyber security, web protocols and a lot more. 
                </p>
            </article>

            <article className="text-cntr" id="Bo2">
                <p className="BTC-text">
                My favorite yet has been databases & algorithms course. That course had me working 
                a little bit harder to solve problems at the beginning.
                </p>
            </article>
          </div>
        </main>
    );
  }
  export default BasicTxtContainer;