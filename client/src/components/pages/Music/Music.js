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
            // Updated 06/06
            href='https://open.spotify.com/playlist/4GoIeK5CHSofywVbaBM5JI?si=d2eb2a502a3e4711&pt=ac46a707d29d10986a94b69fe7f3e61c'
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
