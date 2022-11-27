import React from 'react';

import AlexAna from '../../../assets/images/home/alex-ana-casual-outlined.svg';
import Mandala from '../../../assets/images/mandala.svg';

import { useSetRecoilState } from 'recoil';
import { showRSVPModal } from '../../../recoil/atoms';

import './Home.scss';

export const HomeMobile = () => {
  /* RSVP Modal */
  const setShowRSVPModal = useSetRecoilState(showRSVPModal);
  const openModal = () => setShowRSVPModal(true);

  return (
    <>
      <section className='container__image--landing'>
        <div className='home__container'>
          <img className='homemobile__img--couple' src={AlexAna} alt='Alex et Ana' />
          <img className='homemobile__img--mandala' src={Mandala} alt='Alex et Ana' />

          <article className='homemobile__quote'>
            <p className='text'>
              Le <span className='homemobile__emphasis'>1er juillet 2023</span>, nous célébrons tout
              l’amour que nous avons à offrir, l’un à l’autre bien sûr, mais envers vous surtout !
            </p>

            <div className='home__buttons'>
              <button
                onClick={openModal}
                className='btn btn--outlined homemobile__buttons-rsvp btn--nano bold'
              >
                RSVP
              </button>

              <a
                target='_blank'
                href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjlrMWl0amlia2pzN3A4ZXZ0ZWZzZWNjazggbGVhLmJhdHkuZnJAbQ&tmsrc=lea.baty.fr%40gmail.com'
                className='btn btn--outlined a homemobile__buttons-link'
              >
                Ajouter à mon calendrier
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
