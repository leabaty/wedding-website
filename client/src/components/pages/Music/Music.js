import React from 'react';
import SpotifyLogo from '../../../assets/images/music/spotify-logo.svg';

import './Music.scss';

export const Music = () => {
  return (
    <>
      <article className='container__full'>
        <div className='page'>
          <p>
            Une chanson sur laquelle tu ne peux pas t’empêcher de danser ? Ajoute la directement à
            notre playlist !
          </p>

          <a
            className='music__link'
            // Updated 19/06
            href='https://open.spotify.com/playlist/4GoIeK5CHSofywVbaBM5JI?si=9037dbe20373491d&pt=2f31654743ea4780f01b059aa0d99056'
            target='_blank'
            rel='noreferrer'
          >
            <div className='music__spotifybtn'>
              <img className='music__logo' src={SpotifyLogo} alt='spotify logo' />
              <span className='music__span'>J'ajoute l'ambiance du siècle !</span>
            </div>
          </a>
        </div>
      </article>
    </>
  );
};
