import React from "react";

import "./WeddingGifts.scss";

import giftIcon from "../../../assets/images/wedding-gifts/wedding-gifts-icon.svg";
import useFetchData from '../../../utils/useFetchData.js'

import WeddingModal from "./WeddingModal.js";

export const WeddingGift = () => {
  const { data, loading } = useFetchData("getGifts");

  return (
    <>
      <div className="page gift__list">
        {loading && <div>Chargement...</div>}
        {!loading && data.map((gift) => {
            return (
              <div className="gift__card" key={gift._id}>
                <img
                  className="gift__img"
                  src={gift.image_url}
                  alt={gift.title}
                />

                <div className="gift__infos">
                  <div className="gift__title">
                    <img src={giftIcon} className="gift__icon" />
                    <h1 className="gift__undertitle">{gift.title}</h1>
                  </div>

                  <p className="gift__desc">{gift.description}</p>

                  <div className="gift__status">
                    <p className="gift__price">{gift.price} €</p>
                    <p className="gift__amount">XX €</p>
                    <p className="gift__participants">XX 👤</p>
                  </div>

                  <div className="gift__progress">
                    <div className="gift__progress-int"></div>
                  </div>

                  <WeddingModal props={gift} />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
