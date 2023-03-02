import React from "react";
import "./basicTxtCont.css";

const BasicTxtContainer = () => {
    return (
      <>
        <div className="BTC-section">
          {/* <h1 id="header">"[Otsikko]"</h1> */}
          <div className="BTC-content">
          <div id="kuva1"></div>
          <h1 id="header">"[Otsikko]"</h1> 
              <p className="BTC-text">
                  Ihminen on kokonaisuus, jonka toiminnan ymmärtämiseen tarvitaan
                  osaamista monelta alalta. Oireiden hoitamiseen keskittyvä koululääketiede
                    tekee hyvin oman osansa.
              </p>
          </div>

          <div className="BTC-content" id="Bo2">
              
              <p className="BTC-text">
                  Terveydenhoidolla, joka on täydennetty tieteellistä
                    tutkimusta hyödyntävällä ravintovalmennuksella ja Ersdalin menetelmään
                      pohjautuvalla vyöhyketerapialla saadaan aikaan kestäviä tuloksia matkalla 
                      kohti kokonaisvaltaista hyvinvointia.
              </p>
          </div>
        </div>
      </>
    );
  }
  export default BasicTxtContainer;