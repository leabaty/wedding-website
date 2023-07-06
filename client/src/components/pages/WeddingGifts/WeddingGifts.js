import React from 'react';

import './WeddingGifts.scss';

import couple from '../../../assets/images/wedding-gifts/wedding-gifts-couple.svg';

import { WeddingGift } from './WeddingGift';
import { Souvenirs } from '../Souvenirs/Souvenirs';

export const WeddingGifts = () => {
  return (
    <>
      <article className='container__full' id='wedding-gifts'>
        <div className='page'>
          <h1 className='title'>Liste de Mariage</h1>
          <hr className='title-rule' />
          <p className='bold'>Note du 05 Juillet 2023 : </p>
          <p>Tout d'abord, mille mercis pour votre présence au plus beau jour de notre vie.</p>
          <p>
            Ensuite, deux mille mercis pour vos participations à notre liste de mariage, nous avons
            hâte de vous partager nos plus beaux souvenirs. Si vous n'avez pas pu participer car des
            lucky-luke du clic sont passés ici avant vous, voici le lien vers notre cagnotte :
          </p>
          <a
            target='_blank'
            href='https://lydia-app.com/pots?id=42660-mariage-ana-alex'
            rel='noreferrer'
          >
            <button className='btn--outlined btn--small btn'>C'est par ici !</button>
          </a>

          <p>Trois mille mercis !</p>
          <hr className='title-rule' />
          <img className='category-img' src={couple} alt='Alex et Ana' />
          <p className='text'>
            Notre plus beau présent sera bien sûr votre présence, <br />
            <span className='bold'>
              mais notre 2ème plus beau présent serait un épique voyage de noce en Indonésie (Ana’s
              dream) et Mexique (Alex's dream) ! :D
            </span>
          </p>
          <div className='text'>
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
                • Parce qu’on va lancer le chantier bébé juste après le mariage, et qu’on aimerait
                vivre la vie d’ados insouciants une dernière fois
              </li>
            </ul>
          </div>

          <WeddingGift />
          <Souvenirs />
        </div>
      </article>
    </>
  );
};
