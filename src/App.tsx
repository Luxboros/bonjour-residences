import React from "react";
import "./App.css";
import { Footer } from "./footer/Footer";
import { Gallery } from "./gallery/Gallery";
import { Header } from "./header/Header";
import { Hero } from "./hero/Hero";
import { QuoteBox } from "./quotebox/QuoteBox";
import { Values } from "./values/Values";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Values />
      <Gallery />
      <QuoteBox />
      <Footer />
    </>
  );
}

export default App;