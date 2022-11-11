import React from "react";

import AlexAna from "../../../assets/images/alex-ana.svg";

import "./Home.scss";

function Home() {
  return (
    <>
      <article className="container__couple">
        {/* <div className="page"> */}
        {/* <img className="home__img" src={AlexAna} alt="Alex et Ana" /> */}
        <article className="home__quote">
          <p className="text">
            Si nos différences sont évidentes, nos points communs le sont
            également : de nos deux cultures, nous héritons un joyeux et
            permanent besoin de célébrations collectives. Autour d’une bouteille
            de vin ou d’un thermos de tchai, assis par terre les uns sur les
            autres ou debout en dansant sur les chaises, nous ne vivons que pour
            le plaisir des moments partagés avec nos amis et famille,
            c’est-à-dire vous.
          </p>

          <p className="text home__date">
            Le <span className="home__emphasis">1er juillet 2023</span>, nous
            célébrons tout l’amour que nous avons à offrir, l’un à l’autre bien
            sûr, mais envers vous surtout !
          </p>

          <div className="home__cta">
            <a
              href="https://google.com"
              className="btn btn--outlined btn--large a home__cta-link"
            >
              RSVP
            </a>

            <a
              target="_blank"
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjlrMWl0amlia2pzN3A4ZXZ0ZWZzZWNjazggbGVhLmJhdHkuZnJAbQ&tmsrc=lea.baty.fr%40gmail.com"
              className="btn btn--outlined btn--nano a home__cta-link"
            >
              Ajouter à mon calendrier
            </a>
          
          </div>
        </article>
        {/* </div> */}
      </article>
    </>
  );
}

export default Home;
