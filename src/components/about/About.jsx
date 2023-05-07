/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./about.css";
import ConfFB from "../../img/conf_fb.jpeg";
import Award from "../../img/prix-plume.jpg";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={ConfFB} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">
          2022 - 2023, une nouvelle étape dans ma vie...
        </h1>
        <p className="a-sub">
          "Je renais de mes cendres comme un phénix, je suis si fier de vous
          présenter ce nouveau Félix"
        </p>
        <p className="a-desc">
          Ces deux années, je me suis fixé des nouveaux challenges. Le premier
          était d'assumer pleinement mon bégaiement en participant à un concours
          d'éloquence. Finaliste de l'éloquence du bégaiement Lyon, j'ai eu
          cette chance d'exprimer un discours et de défendre une position devant
          près de 400 personnes. En 2023, j'ai eu l'opportunité d'être le jury
          de la demie-finale. <br />
          Bègue depuis mon enfance, j'ai toujours aimé parler. Comme on dit dans
          le jargon, je suis un bègue bavard et j'ai hâte de vous rencontrer
          pour échanger !
        </p>
        <p className="a-desc">
          L'un de mes autres objectifs était d'apprendre à coder. Le
          développement web rythme aujourd'hui mon quotidien depuis que j'ai
          intégré la Wild Code School et l'entreprise EntendsMoi. Quel
          épanouissement : j'ai pu retrouver du sens dans mon travail et je suis
          fier de vous présenter mes 3 premiers projets "from scratch" (à
          retrouver en dessous)
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <div className="a-award-title">Eloquence du Bégaiement Lyon</div>
            <div className="a-award-desc">
              Prix de la Plume, EM Lyon business school,{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
