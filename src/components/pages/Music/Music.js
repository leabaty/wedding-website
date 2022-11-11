import React from "react";
import SpotifyLogo from "../../../assets/images/spotify-logo.svg";

import "./Music.scss";

export const Music = () => {
  return (
    <>
      <article className="container__full">
        <div className="page">
          <p>
            Une chanson sur laquelle tu ne peux pas t’empêcher de danser ?
            Ajoute la directement à notre playlist !
          </p>

          <a
            className="music__link"
            href="https://open.spotify.com/playlist/4GoIeK5CHSofywVbaBM5JI?si=13e29ca421bc4063&pt=080d1d3d604901ad001ba6bea2d7f98c"
            target="_blank"
          >
            <div className="music__spotifybtn">
              <img className="music__logo" src={SpotifyLogo} />
              <span className="music__span">
                J'ajoute l'ambiance du siècle !
              </span>
            </div>
          </a>
        </div>
      </article>
    </>
  );
};
