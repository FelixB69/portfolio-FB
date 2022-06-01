/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../styles/project.module.css';

function Project({img, link}) {
  return (
    <div className={styles.p}>
      <div className={styles.p_browser}>
        <div className={styles.p_circle}></div>
        <div className={styles.p_circle}></div>
        <div className={styles.p_circle}></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className={styles.p_img} />
      </a>
    </div>
  )
}

export default Project