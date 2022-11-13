import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

import { FaFacebook, FaInstagram } from "react-icons/fa";

import {GiLotus} from "react-icons/gi"

function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__content">
        <div className="footer__link__wrapper">
          <h2 className="footer__title">A propos</h2>

          <div className="footer__links">
            <div className="footer__link__items">
              <Link to="/mentions-legales">Mentions Légales</Link>
              <Link to="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>

        <div className="social__icons">
          <a
            className="social__icon-link"
            href="https://www.facebook.com/Apsara-Yoga-621993021289337"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            className="social__icon-link"
            href="https://www.instagram.com/apsara.yoga/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            className="social__icon-link"
            href="https://jivamuktiyoga.com/teachers-global/laure-pepin/"
            target="_blank"
            aria-label="Jivamukti-Website"
          >
            <GiLotus />
          </a>
        </div>

        <div className="footer__website-rights">Apsara Yoga © 2022</div>
      </div>


    </footer>
  );
}

export default Footer;
