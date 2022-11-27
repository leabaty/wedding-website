import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { FaTimes } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import { useSetRecoilState } from 'recoil';
import { showRSVPModal } from '../../recoil/atoms';

import './Navbar.scss';

import logo from '../../assets/images/mandala.svg';
import RSVPModal from '../pages/RSVP/RSVPModal';

function Navbar() {
  const [openedMobileMenu, setOpenMobileMenu] = useState(false);
  const [visibleNavbar, setVisibleNavbar] = useState(false);

  /* RSVP Modal */
  const setShowRSVPModal = useSetRecoilState(showRSVPModal);
  const openModal = () => setShowRSVPModal(true);

  /* Mobile Menu */
  const handleClick = () => setOpenMobileMenu(!openedMobileMenu);
  const closeMobileMenu = () => setOpenMobileMenu(false);

  /* Desktop visibility */
  const location = useLocation();

  const changeNavbarVisibility = () => {
    if (window.scrollY >= 80 || location.pathname != '/') {
      setVisibleNavbar(true);
    } else {
      setVisibleNavbar(false);
    }
  };

  window.addEventListener('scroll', changeNavbarVisibility);

  return (
    <>
      <nav className={visibleNavbar ? 'navbar' : 'navbar--hidden'}>
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
                <HashLink to='/#program' className='nav-links' onClick={closeMobileMenu}>
                  Programme
                </HashLink>
              </li>

              <li className='nav-item'>
                <HashLink to='/#directions' className='nav-links' onClick={closeMobileMenu}>
                  S'y rendre
                </HashLink>
              </li>

              <li className='nav-item'>
                <HashLink to='/#accomodation' className='nav-links' onClick={closeMobileMenu}>
                  Hébergement
                </HashLink>
              </li>
            </ol>

            <div className='navbar__menu__center'>
              <Link to='/' className='navbar__title' onClick={closeMobileMenu}>
                <p className='navbar__title'>Ana</p>
                <img className='navbar__icon' src={logo} alt='logo-apsara-yoga' />
                <p className='navbar__title'>Alex</p>
              </Link>
            </div>

            <ol className='navbar__menu__right'>
              <li className='nav-item'>
                <Link to='/traditions' className='nav-links' onClick={closeMobileMenu}>
                  Traditions
                </Link>
              </li>

              <li className='nav-item'>
                <HashLink to='/#wedding-gifts' className='nav-links' onClick={closeMobileMenu}>
                  Liste de Mariage
                </HashLink>
              </li>

              <li className='nav-item' onClick={openModal}>
                <div className='nav-links' onClick={closeMobileMenu}>
                  RSVP
                </div>
              </li>
            </ol>
          </div>
        </div>
      </nav>
      <RSVPModal />
    </>
  );
}

export default Navbar;
