import React from 'react';

import './GiftBook.scss';
import '../WeddingGifts.scss';

import useFetchData from '../../../../utils/useFetchData.js';
import messages from './messages.json';

import indonesiamap from '../../../../assets/images/wedding-gifts/honeymoon-indonesia.webp';
import mexicomap from '../../../../assets/images/wedding-gifts/honeymoon-mexico.webp';
import { GiftMessage } from './GiftMessage';

export const GiftBook = () => {
  const { data, loading } = useFetchData('getGifts');

  const calculateProgressBar = (amount, price) => {
    if (!amount) {
      return 0;
    }
    const result = Math.round((amount * 100) / price);
    return result + '%';
  };

  const getLocationMessages = (locationId) => {
    return messages.filter((msg) => msg.location_id === locationId);
  };

  return (
    <>
      <article className='container__full' id='wedding-gifts'>
        <div className='page'>
          <h1 className='title'>Livre d'Or</h1>
          <hr className='title-rule' />

          <h2 className='title'> Indonésie </h2>

          <div className='gift__map'>
            <img className='gift__map__img' src={indonesiamap} alt='honeymoon map' />
          </div>

          <div className='page gift__list'>
            {loading && <div>Chargement...</div>}
            {!loading &&
              data
                .sort((a, b) => a.location_id - b.location_id)
                .map((gift) => {
                  if (gift.location_id < 21) {
                    const locationMessages = getLocationMessages(gift.location_id);
                    return (
                      <div className='msg__card' key={gift._id}>
                        <div className='gift__cover'>
                          <img className='gift__img' src={gift.img_url} alt={gift.title} />
                          <div className='gift__title'>
                            <div className='gift__location-container'>
                              <p className='gift__location'>{gift.location_id}</p>{' '}
                            </div>
                            <h1 className='gift__undertitle'>{gift.title}</h1>
                          </div>
                        </div>

                        <div className='msg__infos'>
                          <p className='gift__desc'>{gift.desc}</p>

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
                            <GiftMessage messages={locationMessages} />
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
          </div>

          <h2 className='title'> Mexique </h2>
          <div className='gift__map'>
            <img className='gift__map__img' src={mexicomap} alt='honeymoon map' />
          </div>

          <div className='page gift__list'>
            {loading && <div>Chargement...</div>}
            {!loading &&
              data
                .sort((a, b) => a.location_id - b.location_id)
                .map((gift) => {
                  if (gift.location_id > 20) {
                    const locationMessages = getLocationMessages(gift.location_id);
                    return (
                      <div className='msg__card' key={gift._id}>
                        <div className='gift__cover'>
                          <img className='gift__img' src={gift.img_url} alt={gift.title} />
                          <div className='gift__title'>
                            <div className='gift__location-container'>
                              <p className='gift__location'>{gift.location_id}</p>{' '}
                            </div>
                            <h1 className='gift__undertitle'>{gift.title}</h1>
                          </div>
                        </div>

                        <div className='msg__infos'>
                          <p className='gift__desc'>{gift.desc}</p>

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
                            <GiftMessage messages={locationMessages} />
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
          </div>
        </div>
      </article>
    </>
  );
};
