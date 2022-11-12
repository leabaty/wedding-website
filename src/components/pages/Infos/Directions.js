import React from "react";

export const Directions = () => {
  return (
    <>
      {" "}
      <div className="page">
        <h1 className="title">Y venir</h1>

        <p className="text">
          A mi-chemin entre Paris et Madagascar (à la louche), l’adorable
          village de Choue accueille notre mariage ! Pas trop loin pour que vous
          soyez en pleine forme en arrivant, et pas trop près pour que vous ne
          retourniez pas trop vite à vos vies chargées.😉
        </p>

        <p className="text">
          Pour maximiser la fiesta, on a réservé un taxi qui vous ramènera dans
          vos lits tout en douceur*!
        </p>
        <span className="text text--astx">
          *Douceur du taxi non contractuelle
        </span>

        <div className="infos__optn-container">
          <div className="infos__optn">
            <h2 className="undertitle">En voiture Simone !</h2>
            <div className="infos__art">
              <p className="text bold center"> 🚗 171 Alleray, 41170 Choue</p>

              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.569681331682!2d0.9145089999999999!3d48.022023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc13c3b1f6b380399!2zNDjCsDAxJzE5LjMiTiAwwrA1NCc1Mi4yIkU!5e0!3m2!1sfr!2sfr!4v1668189814374!5m2!1sfr!2sfr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="171 Alleray, 41170 Choue"
                  width="100%"
                ></iframe>
              </div>
            </div>
            <a
              target="_blank"
              href="https://alleray.fr/home/plan-dacces/"
              className="btn btn--outlined btn--medium a home2__cta-link"
            >
              Voir le plan d'accès
            </a>
          </div>

          <div className="infos__optn">
            <h2 className="undertitle">En train Sylvain !</h2>

            <div className="infos__art">
              <ul>
                <li>
                  🚂 À 18 min de la gare de COURTALAIN SAINT PELLERIN (2h05 de
                  Paris)
                </li>
                <li>🚃 À 20 min de la gare de CLOYES (Paris – Cloyes 1h36)</li>
                <li>
                  🚅 À 25 min de la gare de VENDOME (Paris-Vendôme, 42 min)
                </li>

                <p>
                  Pensez à vous annoncer, on trouvera bien un gentil Dobby pour
                  aller vous chercher à la gare !
                </p>
              </ul>
            </div>

            <a
              target="_blank"
              href="https://www.sncf-connect.com/"
              className="btn btn--outlined btn--medium a home2__cta-link"
            >
              SNCF
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
