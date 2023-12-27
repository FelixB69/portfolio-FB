/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./intro.css";
import PP from "../../img/pp-fb.png";
import CV from "../../img/CV-Felix-Berger.pdf";

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, je suis</h2>
          <h1 className="i-name">Félix Berger</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Développeur Web Junior</div>
              <div className="i-title-item">Full Stack</div>
              <div className="i-title-item">React.js</div>
              <div className="i-title-item">Node.js</div>
            </div>
          </div>
          <p className="i-description">
            Après 4 années fructueuses dans le marketing & la communication,
            j'ai débuté en 2022 une reconversion dans le développement web et
            j’ai obtenu le titre de Concepteur Développeur d'Applications (Bac
            +3/4) en septembre 2023.
            <br />
            <br />
            Actuellement Développeur Web Full-stack chez Likewatt, une startup
            spécialisée dans l'optimisation des ENR, j’ai pour objectif
            d'approfondir mes connaissances et monter en compétences sur des
            projets à impact.
          </p>
          <a className="i-CV" target="_new" href={CV}>
            Téléchargez mon CV
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={PP} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;
