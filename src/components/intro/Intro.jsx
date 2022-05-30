/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import './intro.css'
import PP from '../../img/pp-fb.png'
import CV from '../../img/CV-Felix-Berger.pdf'

function Intro() {
  return (
    <div className='i'>
    <div className='i-left'>
        <div className='i-left-wrapper'>
            <h2 className='i-intro'>Hello, je suis</h2>
            <h1 className='i-name'>Félix Berger</h1>
            <div className='i-title'>
                <div className="i-title-wrapper">
                    <div className="i-title-item">Développeur Web Junior</div>
                    <div className="i-title-item">Full Stack</div>
                    <div className="i-title-item">React.js</div>
                    <div className="i-title-item">Node.js</div>
                </div>
            </div>
            <p className='i-description'>Après 4 années fructueuses dans le marketing & la communication, j'ai débuté une reconversion dans l'IT... Actuellement en formation à la Wild Code School, j'apprends le métier de Développeur Web JS. <b>Je suis à la recherche d'une alternance à partir de Septembre 2022.</b></p>
            <a className='i-CV' target="_new" href={CV}>Téléchargez mon CV</a>
        </div>
    </div>
    <div className='i-right'>
        <div className="i-bg"></div>
        <img src={PP} alt="" className='i-img'/>
    </div>
    </div>

  )
}

export default Intro