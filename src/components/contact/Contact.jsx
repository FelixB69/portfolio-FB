/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "./contact.css";
import Phone from "../../img/phone.jpg";
import Email from "../../img/email.jpg";
import Address from "../../img/address.jpg";
import React, { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast("🌳 Merci pour votre message !", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Et si on échangeait ?</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +33 (0)6 43 65 26 49
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              <a
                className="c-link"
                target="_new"
                href="mailto:fb.felixberger@gmail.com"
              >
                fb.felixberger@gmail.com
              </a>
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              <a
                className="c-link"
                target="_new"
                href="https://www.google.fr/maps/place/Cr+d'Herbouville,+Lyon/@45.7764797,4.837724,17z/data=!4m5!3m4!1s0x47f4eae5b58c58eb:0x5875c3336008ace9!8m2!3d45.7766294!4d4.8400736"
              >
                Cours d'Herbouville, 69004 Lyon, France
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>A la recherche d'un super collaborateur ?</b> Rencontrons nous !
            Contactez-moi via le formulaire...
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Nom"
              name="name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Objet"
              name="subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button className="c-sub">Envoyer</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
