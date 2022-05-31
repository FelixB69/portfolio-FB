/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import "./projectList.css"
import Project from "../project/Project";
import {project} from "../../data"

function ProjectList() {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Conceptualiser, maquetter, développer : découvrez mes projets.</h1> 
                <p className="pl-desc">
                    Retrouvez ici mon portfolio de projet réalisé dans un cadre d'apprentissage et professionnels. Accédez au projet final ainsi qu'au repo GitHub.
                </p>
        </div>
<div className="pl-list">
  {project.map((item) =>(
    <Project key={item.id} img={item.img} link={item.link} />
  ))}

</div>
    </div>
  )
}

export default ProjectList