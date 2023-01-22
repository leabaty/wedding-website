import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {
  return (
    <footer className='footer__container'>
      <div className='footer__links'>
        <Link to='/mentions-legales'>Mentions Légales</Link>
        <Link to='/politique-de-confidentialite'>Politique de confidentialité</Link>
      </div>
    </footer>
  );
}

export default Footer;
