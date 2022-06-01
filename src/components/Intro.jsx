/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from '../styles/intro.module.css';
import PP from '../img/pp-fb.png'
import CV from '../img/CV-Felix-Berger.pdf'

function Intro() {
  return (
    <div className={styles.i}>
    <div className={styles.i_left}>
        <div className={styles.i_left_wrapper}>
            <h2 className={styles.i_intro}>Hello, je suis</h2>
            <h1 className={styles.i_name}>Félix Berger</h1>
            <div className={styles.i_title}>
                <div className={styles.i_title_wrapper}>
                    <div className={styles.i_title_item}>Développeur Web Junior</div>
                    <div className={styles.i_title_item}>Full Stack</div>
                    <div className={styles.i_title_item}>React.js</div>
                    <div className={styles.i_title_item}>Node.js</div>
                </div>
            </div>
            <p className={styles.i_description}>Après 4 années fructueuses dans le marketing & la communication, j'ai débuté une reconversion dans l'IT... Actuellement en formation à la Wild Code School, j'apprends le métier de Développeur Web JS. <b>Je suis à la recherche d'une alternance à partir de Septembre 2022.</b></p>
            <a className={styles.i_CV} target="_new" href={CV}>Téléchargez mon CV</a>
        </div>
    </div>
    <div className={styles.i_right}>
        <div className={styles.i_bg}></div>
        <img src={PP} alt="" className={styles.i_img}/>
    </div>
    </div>

  )
}

export default Intro