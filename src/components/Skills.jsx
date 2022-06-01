/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import CSS from '../img/css.png'
import HTML from '../img/html.png'
import ReactJS from '../img/react.png'
import JS from '../img/javascript.png'
import Node from '../img/node.png'
import GH from '../img/github.png'
import Figma from '../img/figma.png'
import Trello from '../img/trello.png'
import Atlassian from '../img/atlassian.png'
import styles from '../styles/skills.module.css';

const Skills = () => {
    return (
        <div className={styles.s}>
        <div className={styles.s_texts}>
            
            <h1 className={styles.s_title}>Des compétences : et surtout la soif d'apprendre</h1> 
                <p className={styles.s_desc}>
                    <b>"Apprendre à apprendre"</b>, une philosophie que la Wild Code School m'a inculqué
                </p>
        </div>
        <div className={styles.s_skills}>
            <div className={styles.s_dev}>
                    <div className={styles.s_card}><img className={styles.s_img} src={HTML} alt="" /><div className={styles.s_title_skl}>HTML</div></div>
                    <div className={styles.s_card}><img className={styles.s_img} src={CSS} alt="" /><div className={styles.s_title_skl}>CSS</div></div>
                    <div className={styles.s_card}><img className={styles.s_img} src={JS} alt="" /><div className={styles.s_title_skl}>JavaScript</div></div>
                    <div className={styles.s_card}><img className={styles.s_img} src={ReactJS} alt="" /><div className={styles.s_title_skl}>React.js</div></div>
                    <div className={styles.s_card}><img className={styles.s_img} src={Node} alt="" /><div className={styles.s_title_skl}>Node.js</div></div>
            </div>
            <div className={styles.s_other}>
                
                <div className={styles.s_card}><img className={styles.s_img} src={GH} alt="" /><div className={styles.s_title_skl}>GitHub</div></div>
                <div className={styles.s_card}><img className={styles.s_img} src={Trello} alt="" /><div className={styles.s_title_skl}>Trello</div></div>
                <div className={styles.s_card}><img className={styles.s_img} src={Atlassian} alt="" /><div className={styles.s_title_skl}>Atlassian</div></div>
                <div className={styles.s_card}><img className={styles.s_img} src={Figma} alt="" /><div className={styles.s_title_skl}>Figma</div></div>
            </div>
        </div>
        </div>
    );
}

export default Skills;
