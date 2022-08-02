import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Developers from "./components/Developers";
import { Subscribe } from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Developers/>
    <Subscribe/>
  <Footer/>
    </div>
  );
}

export default App;
