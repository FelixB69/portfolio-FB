/* eslint-disable no-undef */
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import ProjectList from "./components/ProjectList";
import Toggle from "./components/Toggle";
import React, { useContext } from "react";
import { ThemeContext } from "./context";
import Skills from "./components/Skills";

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
    </div>
  );
}

export default App;
