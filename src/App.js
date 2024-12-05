import React from "react";
import Header from "./Components/Header";
import "./Components/style.css";
import "./Components/index.css";
import HeroBanner from "./Components/HeroBanner";
import Marquee from "./Components/Marquee";
import Catalog from "./Components/Catalog";
import Bestseller from "./Components/Bestseller";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";




function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Marquee />
      <Catalog />
      <Bestseller />
      <Testimonials />
      <Footer />
    </>

  )
}

export default App;
