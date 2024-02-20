import React from 'react';
import { Landing,About,Contact,Portfolio } from './routes/index';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navigation } from "./components/index";
import "./core-ui/Hover.sass"
import "./core-ui/Styles.sass";
import "./components/footer/Footer.sass"
import './components/navigation/Navigation.sass';
import './routes/portfolio/Portfolio.sass';
import './routes/about/About.sass';
import './routes/contact/Contact.sass';
import './routes/landing/Landing.sass';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
