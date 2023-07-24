import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { useRef } from "react";
import React from "react";

import { Header, Hero, Stack, Projects, Contact, Footer} from './containers';
import { ProjectCard, ProjectDb} from './components';

function App() {
  const stackSection = useRef(null);
  const projectsSection = useRef(null);
  const heroSection = useRef(null);
  const contactSection = useRef(null);

  function scrollToAbout() {
    window.scrollTo({
      top: heroSection.current.offsetTop,
      behavior: "smooth",
    });
  }

  function scrollToStack() {
    window.scrollTo({
      top: stackSection.current.offsetTop,
      behavior: "smooth",
    });
  }

  function scrollToProjects() {
    window.scrollTo({
      top: projectsSection.current.offsetTop,
      behavior: "smooth",
    });
  }

  function scrollToContacts() {
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: "smooth",
    });
  }
  
  return (
    <div className="App">
      <CssBaseline />
      <Header 
          navToSt={scrollToStack} 
          navToAb={scrollToAbout} 
          navToPr={scrollToProjects} 
          navToCon={scrollToContacts}
      />
       <section className="heroSection flex" ref={heroSection}>
        <Hero />
      </section>
      <section className="stackSection flex" ref={stackSection}>
        <Stack />
      </section>
       <section className="projectsSection" ref={projectsSection}>
        <Projects />
      </section>
      <section className="contact__section flex" ref={contactSection}>
        <Contact />
      </section>
     <Footer />  
    </div>
  );
}

export default App;
