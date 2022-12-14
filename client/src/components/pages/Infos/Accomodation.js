import React from 'react';

import { useViewport } from '../../../utils/useViewport';
import { Link } from 'react-router-dom';

import Opt1 from '../../../assets/images/infos/infos-acc-1.svg';
import Opt2 from '../../../assets/images/infos/infos-acc-2.svg';

export const Accomodation = () => {
  const { width } = useViewport();
  return (
    <>
      {' '}
      <div className='page' id='accomodation'>
        <h1 className='title'>Y dormir</h1>

        <div className='infos__optn-container'>
          <div className='infos__optn'>
            <h2 className='undertitle'>L’option « Nos jours heureux »</h2>
            <div className='infos__art'>
              <p className='text'>
                Si vous êtes jeune et festif, ou jeune et pauvre, ou vieux et festif, vous serez
                immanquablement séduit par la Commanderie d’Arville, située à 7 min en voiture du
                mariage, et pouvant accueillir à un tarif défiant toute concurrence (20 à
                25€/pers.)… 106 invités !
              </p>
              {width < process.env.REACT_APP_BREAKPOINT ? (
                ''
              ) : (
                <p className='text'>
                  Alors oui, on est plus sur une ambiance bonne franquette et lits superposés que
                  jaccuzzi privatif. Vous pouvez contacter Ariane (07 63 95 85 25) qui vous
                  expliquera comment ça se passe et répartira les chambres selon les groupes.
                  Attention ! Il n’y a que des lits simples.
                </p>
              )}
            </div>
            <img src={Opt1} className='infos__ico' alt='icon' />
            <a
              target='_blank'
              href='https://commanderie-arville.com/accueil/espaces-hebergement/'
              rel='noreferrer'
              className='btn btn--outlined btn--medium a home2__cta-link'
            >
              Voir les options
            </a>
          </div>

          <div className='infos__optn'>
            <h2 className='undertitle'>L’option « Escapade bucolique »</h2>

            <div className='infos__art'>
              <p className='text'>
                De très nombreux gites sont disponibles autour du site, à quelques minutes en
                voiture.
              </p>
              {width < process.env.REACT_APP_BREAKPOINT ? (
                ''
              ) : (
                <p className='text'>
                  Idéal si vous avez envie de ronfler tranquille, ou de profiter de ce weekend sous
                  le signe de l’amour pour conter fleurette à votre tourterelle.{' '}
                </p>
              )}
            </div>
            <img src={Opt2} className='infos__ico' alt='icon' />

            <Link to='/hebergement' className='btn btn--outlined btn--medium a home2__cta-link'>
              Voir les options
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
