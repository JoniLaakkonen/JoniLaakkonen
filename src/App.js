import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, AboutUs, RV, VT, TTO, Blogi, Ajanvaraus  } from "./Pages";
import { NavBar } from "./Containers";
import "./app.css";

function App() {

  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" element ={[<NavBar />, <Main />]} />
            <Route path="/varaa_aika"  element ={[<NavBar />, <Ajanvaraus />]} />
            <Route path="/blogi"  element ={[<NavBar />, <Blogi />]} />
            <Route path="/tietoja"  element ={[<NavBar />, <AboutUs />]} />
            <Route path="/ravintovalmennus"  element ={[<NavBar />, <RV />]} />
            <Route path="/vyohyketerapia"  element ={[<NavBar />, <VT />]} />
            <Route path="/tunne_ja_tietoisuus"  element ={[<NavBar />, <TTO />]} />

          </Routes>
        </div>
    </Router>
  );
}

export default App;
