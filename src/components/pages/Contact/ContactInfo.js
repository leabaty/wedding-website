import React from "react";

import "./Contact.scss";

function ContactInfo({ handleChange, formData }) {
  return (
    <>
      <div className="form__information">
        <div className="form__element">
          <textarea
            className="form__input --text"
            placeholder="Saisissez l'objet de votre demande ici... "
            type="text"
            name="information_request"
            onChange={handleChange}
            value={formData.information_request}
          />
        </div>

        <button className="btn btn--full btn--large">
          Envoyer ma demande
        </button>
      </div>
    </>
  );
}

export default ContactInfo;
