import React from 'react';

import { useViewport } from '../../../utils/useViewport';

export const Directions = () => {
  const { width } = useViewport();

  return (
    <>
      {' '}
      <div className='page' id='directions'>
        <h1 className='title'>Y venir</h1>

        {width < process.env.REACT_APP_BREAKPOINT ? (
          ''
        ) : (
          <>
            <p className='text'>
              A mi-chemin entre Paris et Madagascar (à la louche), l’adorable village de Choue
              accueille notre mariage ! Pas trop loin pour que vous soyez en pleine forme en
              arrivant, et pas trop près pour que vous ne retourniez pas trop vite à vos vies
              chargées.😉
            </p>
            <p className='text'>
              #libérezsam : les taxis de Noela et Sylvain sont disponibles au 02 54 80 89 44 ou 06
              08 55 39 91 pour vous ramener tout en douceur* durant la nuit !
            </p>
            <span className='text text--astx'>*Douceur du taxi non contractuelle</span>
          </>
        )}

        <div className='infos__optn-container'>
          <div className='infos__optn'>
            <h2 className='undertitle'>En voiture Simone !</h2>
            <div className='infos__art'>
              <p className='text bold center'> 🚗 171 Alleray, 41170 Choue</p>
            </div>
            <div className='map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.569681331682!2d0.9145089999999999!3d48.022023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc13c3b1f6b380399!2zNDjCsDAxJzE5LjMiTiAwwrA1NCc1Mi4yIkU!5e0!3m2!1sfr!2sfr!4v1668189814374!5m2!1sfr!2sfr'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='171 Alleray, 41170 Choue'
                width='100%'
              ></iframe>
            </div>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://alleray.fr/home/plan-dacces/'
              className='btn btn--outlined btn--medium a home2__cta-link'
            >
              Voir le plan d'accès
            </a>
          </div>

          <div className='infos__optn'>
            <h2 className='undertitle'>En taxi-train Sylvain !</h2>

            <div className='infos__art'>
              <ul>
                <li>🚅 À 25 min de la gare de VENDOME (Paris-Vendôme, 42 min)... </li>
                <br />
                <li>
                  🚕 ...Puis à 30 min en taxi : Noela & Sylvain (02 54 80 89 44 ou 06 08 55 39 91) -
                  environ 50€ pour se rendre à Choue
                </li>
              </ul>
            </div>

            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.sncf-connect.com/'
              className='btn btn--outlined btn--medium a home2__cta-link'
            >
              SNCF
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
