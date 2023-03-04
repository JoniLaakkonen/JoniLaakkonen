import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, AboutMe, Skills } from "./Pages";
import { NavBar, Footer } from "./Containers";
import ScrollToTop from './Scripts/ScrollToTop';
import "./app.css";

function App() {

  return (
    <Router>
        <ScrollToTop/>
        <div className="App">
          <Routes>
            <Route path="/JoniLaakkonen" element ={[<NavBar />, <Main />, <Footer />]} />
            <Route path="/JoniLaakkonen/contact_card" element ={[<AboutMe />, <Footer />]} />
            <Route path="/JoniLaakkonen/skills" element ={[<Skills />, <Footer />]} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
