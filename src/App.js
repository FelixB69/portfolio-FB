/* eslint-disable no-undef */
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Toggle from "./components/toggle/Toggle";
import React, { useContext } from "react";
import { ThemeContext } from "./context";
import Skills from "./components/skill/Skills";
import Footer from "./components/footer/Footer";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Skills />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
