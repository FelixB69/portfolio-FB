/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import CSS from '../../img/css.png'
import HTML from '../../img/html.png'
import ReactJS from '../../img/react.png'
import JS from '../../img/javascript.png'
import Node from '../../img/node.png'
import GH from '../../img/github.png'
import Figma from '../../img/figma.png'
import Trello from '../../img/trello.png'
import Atlassian from '../../img/atlassian.png'
import "./skills.css"

const Skills = () => {
    return (
        <div className="s">
        <div className="s-texts">
            
            <h1 className="s-title">Des compétences : et surtout la soif d'apprendre</h1> 
                <p className="s-desc">
                    <b>"Apprendre à apprendre"</b>, une philosophie que la Wild Code School m'a inculqué...
                </p>
        </div>
        <div className="s-skills">
            <div className="s-dev">
                    <div className="s-card"><img className='s-img' src={HTML} alt="" /><div className='s-title-skl'>HTML</div></div>
                    <div className="s-card"><img className='s-img' src={CSS} alt="" /><div className='s-title-skl'>CSS</div></div>
                    <div className="s-card"><img className='s-img' src={JS} alt="" /><div className='s-title-skl'>JavaScript</div></div>
                    <div className="s-card"><img className='s-img' src={ReactJS} alt="" /><div className='s-title-skl'>React.js</div></div>
                    <div className="s-card"><img className='s-img' src={Node} alt="" /><div className='s-title-skl'>Node.js</div></div>
            </div>
            <div className="s-other">
                
                <div className="s-card"><img className='s-img' src={GH} alt="" /><div className='s-title-skl'>GitHub</div></div>
                <div className="s-card"><img className='s-img' src={Trello} alt="" /><div className='s-title-skl'>Trello</div></div>
                <div className="s-card"><img className='s-img' src={Atlassian} alt="" /><div className='s-title-skl'>Atlassian</div></div>
                <div className="s-card"><img className='s-img' src={Figma} alt="" /><div className='s-title-skl'>Figma</div></div>
            </div>
        </div>
        </div>
    );
}

export default Skills;
