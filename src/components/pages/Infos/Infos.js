import React from "react";

import "./Infos.scss";

import couple from "../../../assets/images/infos-alex-ana.svg"

function Infos() {
  return (
    <>
      <article className="container__image">
        <div className="page">
          <h1 className="title">Infos Pratiques</h1>
          <hr className="title-rule" />

          <img className="category-img" src={couple} alt="Alex et Ana" />
          
        </div>
      </article>
    </>
  );
}

export default Infos;
