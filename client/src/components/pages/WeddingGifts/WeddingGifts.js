import React from 'react';

import './WeddingGifts.scss';

import couple from '../../../assets/images/wedding-gifts/wedding-gifts-couple.svg';

import { WeddingGift } from './WeddingGift';

export const WeddingGifts = () => {
  return (
    <>
      <article className='container__full' id='wedding-gifts'>
        <div className='page'>
          <h1 className='title'>Liste de Mariage</h1>
          <hr className='title-rule' />
          <img className='category-img' src={couple} alt='Alex et Ana' />
          <p className='text'>
            Notre plus beau présent sera bien sûr votre présence,{' '}
            <span className='bold'>
              mais notre 2ème plus beau présent serait un épique voyage de noce en Indonésie ! :D
            </span>
          </p>
          <p className='text'>
            <h2 className='undertitle'>Pourquoi ce voyage ?</h2>
            <ul>
              <li>
                • Parce qu’on essaie de l’organiser depuis 3 ans et qu’un vilain virus a fait voler
                nos rêves en éclat
              </li>
              <li>• Parce qu’Alex est trop blanc </li>
              <li>
                {' '}
                • Parce que Réré voudrait faire un dernier album Facebook avant de rendre sa
                casquette d’influenceuse #boomer
              </li>
              <li>
                • Parce qu’on va lancer le chantier bébé, couches & responsabilités juste après le
                mariage, et qu’on aimerait vivre la vie d’ados insouciants une dernière fois
              </li>
            </ul>
          </p>

          <WeddingGift />
        </div>
      </article>
    </>
  );
};
