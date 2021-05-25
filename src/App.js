import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Menu />
    </Router>
  );
}

export default App;
