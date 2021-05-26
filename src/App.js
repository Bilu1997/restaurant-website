import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import ImagesBar from "./components/ImagesBar/ImagesBar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <ImagesBar />
      <Menu />
    </Router>
  );
}

export default App;
