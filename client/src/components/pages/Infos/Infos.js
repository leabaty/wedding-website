import React from "react";

import "./Infos.scss";

import couple from "../../../assets/images/infos/infos-alex-ana.svg"
import { Directions } from "./Directions";
import { Accomodation } from "./Accomodation";

function Infos() {
  return (
    <>
      <section className="container__image">
        <div className="page">
          <h1 className="title">Infos Pratiques</h1>
          <hr className="title-rule" />
          <img className="category-img" src={couple} alt="Alex et Ana" />
        </div>

        <Directions/>
        <Accomodation/>
      </section>
    </>
  );
}

export default Infos;
