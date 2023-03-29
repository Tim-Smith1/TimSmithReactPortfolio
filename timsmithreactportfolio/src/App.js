import logo from './logo.svg';
import './App.css';

import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Project from "./components/Project";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Contact />
      <Portfolio />
      <Project />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
