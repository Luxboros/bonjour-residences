import { atom, useAtom } from "jotai";
import React, { useEffect } from "react";
import "./App.css";
import { Footer } from "./footer/Footer";
import { Gallery } from "./gallery/Gallery";
import { Header } from "./header/Header";
import { Hero } from "./hero/Hero";
import { QuoteBox } from "./quotebox/QuoteBox";
import { Values } from "./values/Values";

export const isMobileAtom = atom(false);

function App() {
  const [isMobile, setIsMobile] = useAtom(isMobileAtom);

  useEffect(() => {
    const windowMediaQuery = window.matchMedia("(max-width: 1024px)");

    setIsMobile(windowMediaQuery.matches);
    const updateWindowMediaQuery = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    windowMediaQuery.addEventListener("change", updateWindowMediaQuery);
    return () => {
      windowMediaQuery.removeEventListener("change", updateWindowMediaQuery);
    };
  }, [isMobile]);
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