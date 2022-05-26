/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import "./contact.css"
import Phone from "../../img/phone.jpg"
import Email from "../../img/email.jpg"
import Address from "../../img/address.jpg"

const Contact = () => {
    // const formRef = useRef
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();  
    // }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Et si on échangeait ? 
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />+33 (0)6 43 65 26 49
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />fb.felixberger@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />Cours d'Herbouville, 69004 Lyon, France
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>A la recherche d'un super alternant ?</b> Rencontrons nous ! Contactez-moi via le formulaire... :)
                    </p>
                    <form >
                        <input type="text" placeholder='Nom' name="user_name" />
                        <input type="text" placeholder='Objet' name="user_subject" />
                        <input type="text" placeholder='Email' name="user_email" />
                        <textarea name="message" rows="5" placeholder='Message'></textarea>
                        <button>Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
