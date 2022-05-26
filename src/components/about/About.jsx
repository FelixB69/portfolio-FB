/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import "./about.css"
import ConfFB from "../../img/conf_fb.jpeg"
import Award from "../../img/prix-plume.jpg"


function About() {
  return (
    <div className='a'>
        <div className="a-left">
          <div className="a-card bg"></div>
            <div className="a-card">
              <img src={ConfFB} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className='a-sub'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        <p className='a-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <div className="a-award-title">Eloquence du Bégaiement Lyon</div>
            <div className="a-award-desc">Prix de la Plume, EM Lyon busines school, </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default About