import React, { useState, useEffect } from "react";
import { Link as div } from "react-router-dom";

import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";

import "./Navbar.scss";

import logo from "../../assets/images/mandala.svg";

function Navbar() {
  const [openedMobileMenu, setOpenMobileMenu] = useState(false);

  /* Ca permet d'ouvrir et de fermer le menu avec la petite croix/les bars */
  const handleClick = () => setOpenMobileMenu(!openedMobileMenu);

  /* Quand l'utilisateur a cliqué sur un des liens, cela ferme le menu et présente à nouveau la navbar mobile*/
  const closeMobileMenu = () => setOpenMobileMenu(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="mobilemenu__navbar">
            <div className="mobilemenu__logo">
              <div className="navbar__title" onClick={closeMobileMenu}>
                <p className="navbar__title">Ana</p>
                <img
                  className="navbar__icon"
                  src={logo}
                  alt="logo-apsara-yoga"
                />
                <p className="navbar__title">Alex</p>
              </div>
            </div>

            <div className="mobilemenu__button" onClick={handleClick}>
              {openedMobileMenu ? <FaTimes /> : <HiOutlineMenuAlt3 />}
            </div>
          </div>

          <div
            className={
              openedMobileMenu ? "navbar__menu active" : "navbar__menu"
            }
          >
            <ol className="navbar__menu__left">
              <li className="nav-item">
                <div
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Programme
                </div>
              </li>

              <li className="nav-item">
                <div
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  S'y rendre
                </div>
              </li>

              <li className="nav-item">
                <div
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                 Hébergement
                </div>
              </li>
            </ol>

            <div className="navbar__menu__center">
              <div to="/" className="navbar__title" onClick={closeMobileMenu}>
                <p className="navbar__title">Ana</p>
                <img
                  className="navbar__icon"
                  src={logo}
                  alt="logo-apsara-yoga"
                />
                <p className="navbar__title">Alex</p>
              </div>
            </div>

            <ol className="navbar__menu__right">
              <li className="nav-item">
                <div
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Traditions
                </div>
              </li>

              <li className="nav-item">
                <div
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Liste de Mariage
                </div>
              </li>

              <li className="nav-item">
                <div
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  RSVP
                </div>
              </li>

            </ol>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
