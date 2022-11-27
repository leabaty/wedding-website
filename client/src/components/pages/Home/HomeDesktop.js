import React from 'react';

import AlexAna from '../../../assets/images/home/alex-ana-casual-outlined.svg';
import Mandala from '../../../assets/images/mandala.svg';

import { useSetRecoilState } from 'recoil';
import { showRSVPModal } from '../../../recoil/atoms';

import './Home.scss';

export const HomeDesktop = () => {
  /* RSVP Modal */
  const setShowRSVPModal = useSetRecoilState(showRSVPModal);
  const openModal = () => setShowRSVPModal(true);

  return (
    <>
      <section className='container__image--landing'>
        <div className='home__container'>
          <img className='home__img--couple' src={AlexAna} alt='Alex et Ana' />
          <img className='home__img--mandala' src={Mandala} alt='Alex et Ana' />

          <article className='home__quote'>
            <p className='text home__emphasis'>Cher Invité,</p>

            <p className='text'>
              Si nos différences sont évidentes, nos points communs le sont également : de nos deux
              cultures, nous héritons un joyeux et permanent besoin de célébrations collectives.
              Autour d’une bouteille de vin ou d’un thermos de tchai, assis par terre les uns sur
              les autres ou debout en dansant sur les chaises, nous ne vivons que pour le plaisir
              des moments partagés avec nos amis et famille, c’est-à-dire vous.
            </p>

            <p className='text home__date'>
              Le <span className='home__emphasis'>1er juillet 2023</span>, nous célébrons tout
              l’amour que nous avons à offrir, l’un à l’autre bien sûr, mais envers vous surtout !
            </p>

            <div className='home__buttons'>
              <button onClick={openModal} className='btn btn--outlined home__buttons-rsvp bold'>
                RSVP
              </button>

              <a
                target='_blank'
                href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MjlrMWl0amlia2pzN3A4ZXZ0ZWZzZWNjazggbGVhLmJhdHkuZnJAbQ&tmsrc=lea.baty.fr%40gmail.com'
                className='btn btn--outlined a home__buttons-link'
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
