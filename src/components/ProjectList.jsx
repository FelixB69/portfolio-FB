/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../styles/projectList.module.css';
import Project from "./Project";
import {project} from "../data"

function ProjectList() {
  return (
    <div className={styles.pl}>
        <div className={styles.pl_texts}>
            <h1 className={styles.pl_title}>Conceptualiser, maquetter, développer : découvrez mes projets.</h1> 
                <p className={styles.pl_desc}>
                    Retrouvez ici mon portfolio de projet réalisé dans un cadre d'apprentissage et professionnels. Accédez au projet final ainsi qu'au repo GitHub.
                </p>
        </div>
<div className={styles.pl_list}>
  {project.map((item) =>(
    <Project key={item.id} img={item.img} link={item.link} />
  ))}

</div>
    </div>
  )
}

export default ProjectList