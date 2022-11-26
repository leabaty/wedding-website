import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scrollchor, easeOutQuad } from 'react-scrollchor';

import { FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import './Navbar.scss';

import logo from '../../assets/images/mandala.svg';

function Navbar(props) {
  const [openedMobileMenu, setOpenMobileMenu] = useState(false);
  const [visibleNavbar, setVisibleNavbar] = useState(false);

  // mobile menu
  const handleClick = () => setOpenMobileMenu(!openedMobileMenu);
  const closeMobileMenu = () => setOpenMobileMenu(false);

  // navbar visibility
  const changeNavbarVisibility = () => {
    if (window.scrollY >= 80 || location.pathname != '/') {
      setVisibleNavbar(true);
    } else {
      setVisibleNavbar(false);
    }
  };

  const location = useLocation();

  window.addEventListener('scroll', changeNavbarVisibility);

  // // react-scrollchor
  // const defaultAnimate = {
  //   offset: -80,
  //   duration: 400,
  //   easing: easeOutQuad,
  // };

  return (
    <>
      <nav className={visibleNavbar ? 'navbar' : 'navbar'}>
        <div className='navbar__container'>
          <div className='mobilemenu__navbar'>
            <div className='mobilemenu__logo'>
              <Link to='/' className='navbar__title' onClick={closeMobileMenu}>
                <p className='navbar__title'>Ana</p>
                <img className='navbar__icon' src={logo} alt='logo-apsara-yoga' />
                <p className='navbar__title'>Alex</p>
              </Link>
            </div>

            <div className='mobilemenu__button' onClick={handleClick}>
              {openedMobileMenu ? <FaTimes /> : <HiOutlineMenuAlt3 />}
            </div>
          </div>

          <div className={openedMobileMenu ? 'navbar__menu active' : 'navbar__menu'}>
            <ol className='navbar__menu__left'>
              <li className='nav-item'>
                <Link to='/#program' className='nav-links' onClick={closeMobileMenu}>
                  Programme
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/#directions' className='nav-links' onClick={closeMobileMenu}>
                  S'y rendre
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/#accomodation' className='nav-links' onClick={closeMobileMenu}>
                  Hébergement
                </Link>
              </li>
            </ol>

            <div className='navbar__menu__center'>
              <div to='/' className='navbar__title' onClick={closeMobileMenu}>
                <p className='navbar__title'>Ana</p>
                <img className='navbar__icon' src={logo} alt='logo-apsara-yoga' />
                <p className='navbar__title'>Alex</p>
              </div>
            </div>

            <ol className='navbar__menu__right'>
              <li className='nav-item'>
                <Link to='/traditions' className='nav-links' onClick={closeMobileMenu}>
                  Traditions
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/#wedding-gifts' className='nav-links' onClick={closeMobileMenu}>
                  Liste de Mariage
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/rsvp' className='nav-links' onClick={closeMobileMenu}>
                  RSVP
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
