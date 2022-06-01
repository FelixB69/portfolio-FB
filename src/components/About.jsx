/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from '../styles/about.module.css';
import ConfFB from "../img/conf_fb.jpeg"
import Award from "../img/prix-plume.jpg"


function About() {
  return (
    <div className={styles.a}>
        <div className={styles.a_left}>
          <div className={styles.a_card_bg}></div>
            <div className={styles.a_card}>
              <img src={ConfFB} alt="" className={styles.a_img} />
            </div>
        </div>
        <div className={styles.a_right}>
        <h1 className={styles.a_title}>2022, une nouvelle étape dans ma vie...</h1>
        <p className={styles.a_sub}>"Je renais de mes cendres comme un phénix, je suis si fier de vous présenter ce nouveau Félix"</p>
        <p className={styles.a_desc}>Cette année, je me suis fixé deux challenges. Le premier était de participer à un concours d'éloquence et assumer pleinement mon bégaiement. Finaliste de l'éloquence du bégaiement Lyon, j'ai eu cette chance d'exprimer un discours et de défendre une position devant près de 400 personnes. Bègue depuis mon enfance, j'ai toujours aimé parler. Comme on dit dans le jargon, je suis un bègue bavard et j'ai hâte de vous rencontrer pour échanger !</p>
         <p className={styles.a_desc}>Le deuxième objectif était d'apprendre à coder. Le développement web rythme aujourd'hui mon quotidien depuis que j'ai intégré la Wild Code School Lyon. Quel épanouissement : j'ai pu retrouver du sens dans mon travail et je suis fier de vous présenter mes 3 premiers projets "from scratch" (à retrouver en dessous)</p>
        <div className={styles.a_award}>
          <img src={Award} alt="" className={styles.a_award_img} />
          <div className={styles.a_award_texts}>
            <div className={styles.a_award_title}>Eloquence du Bégaiement Lyon</div>
            <div className={styles.a_award_desc}>Prix de la Plume, EM Lyon busines school, </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default About