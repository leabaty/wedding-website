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
              Si nos différences sont évidentes, nos points communs le sont aussi : de nos deux
              cultures, nous héritons d’un besoin de partager des moments entre amis ou en famille.
              Autour d’un thermos ou d’une bouteille, assis par terre ou accoudés au bar, notre plus
              grande joie est de vous retrouver.
            </p>

            <p className='text'>
              Cet été 2023, nous célébrons notre amour l’un pour l’autre, et tout notre amour pour
              vous !
            </p>

            <div className='home__buttons'>
              <button onClick={openModal} className='btn btn--outlined home__buttons-rsvp bold'>
                RSVP
              </button>

              <a
                target='_blank'
                href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWxtdnZnNHZwdnFrY2RxYnQzdmhwYmQyZzYgNzlhNzc4MDBlZGUwOTE5MDc1NDhjM2YwNGY1ZGM5YWEyNDcxNDI1ODYxYzgxNDM1OTBiZTg3MjA0NGE5ZjE2MEBn&tmsrc=79a77800ede091907548c3f04f5dc9aa2471425861c8143590be872044a9f160%40group.calendar.google.com'
                className='btn btn--outlined a home__buttons-link'
                rel='noreferrer'
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
