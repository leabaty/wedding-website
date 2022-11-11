import React from "react";
import { Link } from "react-router-dom";

// import NotFoundImg from "../../../assets/images/NotFound-Arturo Jimenez.gif"
import "./NotFound.scss";

function NotFound() {
  return (
    <main className="page notfound__page">
      <section>
        <h1 className="notfound__title title"> 404 </h1>
        <p className="notfound__text" > Oups, cette page n'existe plus !...</p>
        {/* <img className="notfound__img" src={NotFoundImg} alt="404 - Not Found GIF by Arturo Jimenez"/> */}
      </section>

      <Link to="/">
              <button className="btn btn--full btn--large">
                Revenir à l'accueil
              </button>
            </Link>
    </main>


  );
}

export default NotFound;
