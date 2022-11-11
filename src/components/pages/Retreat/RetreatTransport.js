import React from "react";

import "./RetreatTransport.scss"

function RetreatTransport(transports) {
  return (
    <>
      {" "}
      <section className="retreat__transport retreat__section">
        <h2 className="title title--medium retreat__undertitle">
          Comment j'y vais ?
        </h2>

        <div className="retreat__transport__container">
          {transports.transports.map((transport) => {
            return (
              <div key={transport.transportMode} className="retreat__transport__card">
                <h2 className="undertitle retreat__transport__card__title">
                  {transport.transportMode}
                </h2>
                <ol>
                  {transport.transportInstructions.map((instruction) => {

                    return (
                      <li
                        key={instruction}
                        className="retreat__transport__card__instruction"
                      >
                        {instruction}
                      </li>
                    );
                  })}
                </ol>
              </div>
            );
          })}
        </div>

        <div className="retreat__transport__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22585.710049981695!2d0.39537841786193656!3d44.95964911226986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aacdab25fa5ae1%3A0xa066519d2f62f80!2sLe%20Tillet%2C%2024400%20Les%20L%C3%A8ches!5e0!3m2!1sfr!2sfr!4v1645961139040!5m2!1sfr!2sfr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <aside className="text retreat__transport__aside">
          N.B : Un groupe WhatsApp sera créé entre les participants.es pour
          organiser la logistique des transports, co-voiturage, horaires etc.
        </aside>
      </section>
    </>
  );
}

export default RetreatTransport;
