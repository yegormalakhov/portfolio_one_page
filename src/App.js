import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import { useRef } from "react";
import React from "react";

function App() {
  const stackSection = useRef(null);
  const projectsSection = useRef(null);
  const heroSection = useRef(null);

  function scrollToSt() {
    window.scrollTo({
      top: stackSection.current.offsetTop,
      behavior: "smooth",
    });
  }
  function scrollToAb() {
    window.scrollTo({
      top: heroSection.current.offsetTop,
      behavior: "smooth",
    });
  }
  function scrollToPr() {
    window.scrollTo({
      top: projectsSection.current.offsetTop,
      behavior: "smooth",
    });
  }

  return (
    <div className="App">
      <CssBaseline />
      <Header navToSt={scrollToSt} navToAb={scrollToAb} navToPr={scrollToPr} />
      <Hero heroSection={heroSection} />
      <Stack stackSection={stackSection} />
      <Projects projectsSection={projectsSection} />
      <Footer />
    </div>
  );
}

export default App;
