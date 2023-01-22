import React from 'react';

import chatting from '../../../assets/images/infos/org-chatting.svg';
import carpooling from '../../../assets/images/infos/org-carpooling.svg';
import lodging from '../../../assets/images/infos/org-lodging.svg';

export const Organization = () => {
  return (
    <>
      {' '}
      <div className='page' id='directions'>
        <h1 className='title'>S'organiser</h1>

        <div className='infos__org'>
          <h2 className='undertitle'> Pour... </h2>

          <div className='infos__org__block'>
            <div className='infos__org__item'>
              <img className='infos__org__item__img' src={carpooling} alt='carpooling people' />
              <p>Proposer ou rechercher une place en covoiturage</p>
            </div>

            <div className='infos__org__item'>
              <img className='infos__org__item__img' src={lodging} alt='people under a roof' />
              <p>Gérer notre logement à plusieurs</p>
            </div>

            <div className='infos__org__item'>
              <img className='infos__org__item__img' src={chatting} alt='chatting people' />
              <p>Echanger avec les autres invités</p>
            </div>
          </div>

          <a
            target='_blank'
            rel='noreferrer'
            href='https://ana-alex.glide.page/'
            aria-label='Link to carpooling website'
            className='btn btn--outlined btn--medium a home2__cta-link'
          >
            C'est par ici !
          </a>
        </div>
      </div>
    </>
  );
};
