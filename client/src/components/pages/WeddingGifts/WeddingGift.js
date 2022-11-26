import React, { useState } from 'react';

import './WeddingGifts.scss';

import giftIcon from '../../../assets/images/wedding-gifts/wedding-gifts-icon.svg';
import useFetchData from '../../../utils/useFetchData.js';

import WeddingModal from './WeddingModal.js';

export const WeddingGift = () => {
  const { data, loading } = useFetchData('getGifts');

  const calculateProgressBar = (amount, price) => {
    if (!amount) {
      return 0;
    }
    const result = Math.round((amount * 100) / price);
    return result + '%';
  };

  return (
    <>
      <div className='page gift__list'>
        {loading && <div>Chargement...</div>}
        {!loading &&
          data.map((gift) => {
            return (
              <div className='gift__card' key={gift._id}>
                <img className='gift__img' src={gift.image_url} alt={gift.title} />

                <div className='gift__infos'>
                  <div className='gift__title'>
                    {/* <img src={giftIcon} className='gift__icon' /> */}
                    <div className='gift__location-container'>
                      <p className='gift__location'>34</p>{' '}
                    </div>

                    <h1 className='gift__undertitle'>{gift.title}</h1>
                  </div>

                  <div className='gift__container'>
                    <p className='gift__desc'>{gift.description}</p>

                    <div className='gift__details'>
                      <div className='gift__status'>
                        <p className='gift__price'>{gift.price} €</p>
                        <p className='gift__amount'>{gift.amount || '-'} €</p>
                        <p className='gift__participants'>{gift.participants || '-'} 👤</p>
                      </div>

                      <div className='gift__progress'>
                        <div
                          className='gift__progress-int'
                          style={{
                            width: calculateProgressBar(gift.amount, gift.price),
                            backgroundColor: !gift.amount && 'var(--primary)',
                          }}
                        ></div>
                      </div>

                      <WeddingModal props={gift} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
