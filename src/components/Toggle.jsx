/* eslint-disable no-undef */
import React, {useContext} from 'react'
import Sun from "../img/sun.png"
import Moon from "../img/moon.png"
import styles from '../styles/toggle.module.css';
import { ThemeContext } from '../context';

export default function Toggle() {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <div className={styles.t}>
        <img src={Sun} alt="" className={styles.t_icon} />
        <img src={Moon} alt="" className={styles.t_icon} />
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}