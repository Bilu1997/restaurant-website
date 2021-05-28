import React from "react";
import Navbar from "../components/Navbar/Navbar.js";
import Hero from "../components/Hero/Hero";
import Menu from "../components/Menu/Menu";
import ImagesBar from "../components/ImagesBar/ImagesBar";
import ShortInfoBar from "../components/ShortInfoBar/ShortInfoBar";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShortInfoBar />
      <ImagesBar />
      <Menu />
    </>
  );
};

export default Home;
