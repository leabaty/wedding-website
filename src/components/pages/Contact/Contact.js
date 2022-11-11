import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ContactBase from "./ContactBase";
import ContactInfo from "./ContactInfo";

import "./Contact.scss";

function Contact(rooms) {
  // STATE
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [sent, setSent] = useState(false);

  // FILLING IN THE FORM OBJECT "LIVE" (containing the data from our guest)
  const handleChange = (event) => {
    const value = event.target.value;

    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  // CHECKING IF THE FORM IS CORRECTLY FILLED OUT
  const validate = (value) => {
    const errors = {};

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const regexPhone = /^\d{10,}$/;

    if (!value.firstname) {
      errors.firstname = "⚠ Ce champ est obligatoire";
    }
    if (!value.lastname) {
      errors.lastname = "⚠ Ce champ est obligatoire";
    }
    if (!value.email) {
      errors.email = "⚠ Ce champ est obligatoire";
    } else if (!regexEmail.test(value.email)) {
      errors.email =
        "⚠ Merci de vérifier votre saisie, le format de l'email ne correspond pas";
    }
    if (!value.phone) {
      errors.phone = "⚠ Ce champ est obligatoire";
    } else if (!regexPhone.test(value.phone)) {
      errors.phone =
        "⚠ Merci de vérifier votre saisie, le numéro doit comporter au minimum 10 chiffres";
    }
    return errors;
  };

  // HANDLING THE FORM SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormErrors(validate(formData));
    setIsSubmit(true);

    setFormData((prevState) => {
      return {
        ...prevState,
      };
    });
  };

  // SENDING PARAMETERS
  const sendData = async (URL) => {
    setSent(true);
    try {
      await axios.post(`https://apsara-yoga.herokuapp.com/${URL}`, {
        formData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // FINALLY SENDING THIS EMAIL
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendData("api/v1/apsara-yoga/send_info_request");
      sendData("api/v1/apsara-yoga/send_info_recap");
    }
  }, [formErrors]);

  return (
    <>
      {/*FORMULAIRE DE BASE*/}

      <body className="page">
        <h1 className="title title--medium">Contact</h1>
        <hr className="title-rule" />

        {!sent ? (
          <form className="form" onSubmit={handleSubmit}>
            <ContactBase
              handleChange={handleChange}
              formData={formData}
              formErrors={formErrors}
            />

            <ContactInfo handleChange={handleChange} formData={formData} />

            {Object.keys(formErrors).length !== 0 ? (
              <p>
                Le formulaire contient des erreurs, merci de vérifier votre
                saisie.
              </p>
            ) : (
              ""
            )}

            {/*CONDITION 1 : Le formulaire n'est pas rempli, on affiche le formulaire
            
            CONDITION 2 : Le formulaire contient des erreurs, on affiche un message d'erreur + le formulaire
            
            CONDITION 3 : Le formulaire est envoyé et ne contient pas d'erreur, on affiche un message de confirmation*/}
          </form>
        ) : (
          <div>
            <p className="text">
              Merci, votre demande m'a bien été transmise. <br />
              Vous recevrez une réponse très bientôt à l'adresse mail indiquée.{" "}
              <br /> ⚠️ Pensez à bien vérifier votre dossier de SPAMS 📧 !
            </p>

            <Link to="/">
              <button className="btn btn--full btn--large">
                Retour à l'accueil
              </button>
            </Link>
          </div>
        )}
      </body>
    </>
  );
}

export default Contact;
