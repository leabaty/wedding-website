import React from "react";

import Opt1 from "../../../assets/images/infos-acc-1.svg";
import Opt2 from "../../../assets/images/infos-acc-2.svg";

export const Accomodation = () => {
  return (
    <>
      {" "}
      <article className="container__full">
        <div className="page">
          <h1 className="title">Y dormir</h1>

          <div className="acc__optn-container">
            <div className="acc__optn">
              <h2 className="undertitle">L’option « Nos jours heureux »</h2>
              <div className="acc__art">
                <p className="text">
                  Si vous êtes jeune et festif, ou jeune et pauvre, ou vieux et
                  festif, vous serez immanquablement séduit par la Commanderie
                  d’Arville, située à 7 min en voiture du mariage, et pouvant
                  accueillir à un tarif défiant toute concurrence (20 à
                  25€/pers.)… 106 invités !
                </p>
                <p className="text">
                  Alors oui, dans ces conditions, on est plus sur une ambiance
                  bonne franquette et lits superposés que château et jaccuzzi
                  privatif. N’hésitez pas à consulter le site pour réserver les
                  chambres adaptées à la taille de votre groupe.
                </p>
              </div>
              <img src={Opt1} className="acc__ico" />
              <a
                target="_blank"
                href=""
                className="btn btn--outlined btn--medium a home2__cta-link"
              >
                RSVP
              </a>
            </div>

            <div className="acc__optn">
              <h2 className="undertitle">L’option « Escapade bucolique »</h2>

              <div className="acc__art">
                <p className="text">
                  De très nombreux gites sont disponibles autour du site, à
                  quelques minutes en voiture.
                </p>
                <p className="text">
                  Idéal si vous avez envie de ronfler tranquille, ou de profiter
                  de ce weekend sous le signe de l’amour pour conter fleurette à
                  votre tourterelle.{" "}
                </p>
              </div>
              <img src={Opt2} className="acc__ico" />

              <a
                target="_blank"
                href=""
                className="btn btn--outlined btn--medium a home2__cta-link"
              >
                Voir les options
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
