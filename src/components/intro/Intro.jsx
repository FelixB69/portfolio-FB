import React from 'react'
import './intro.css'

function Intro() {
  return (
    <div className='i'>
    <div className='i-left'>Left
        <div className='i-left-wrapper'>
            <h2 className='i-intro'>Hello, je m'appelle</h2>
            <h1 className='i-name'>Félix Berger</h1>
            <div className='i-title'>
                <div className="i-title-wrapper">
                    <div className="i-title-item">Développeur Web Junior</div>
                    <div className="i-title-item">Développeur Web Junior</div>
                    <div className="i-title-item">Développeur Web Junior</div>
                    <div className="i-title-item">Développeur Web Junior</div>
                    <div className="i-title-item">Développeur Web Junior</div>
                    <div className="i-title-item">Développeur Web Junior</div>
                </div>
               
            </div>
        </div>
    </div>
    <div className='i-right'>Right</div>
    </div>

  )
}

export default Intro