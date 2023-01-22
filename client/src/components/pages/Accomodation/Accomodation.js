import React from 'react';

import airbnb from '../../../assets/images/accomodation/airbnb.svg';
import cottage from '../../../assets/images/accomodation/cottage.svg';
import bnb from '../../../assets/images/accomodation/bnb.svg';
import hotel from '../../../assets/images/accomodation/hotel.svg';

import website from '../../../assets/images/accomodation/website.svg';
import email from '../../../assets/images/accomodation/email.svg';
import phone from '../../../assets/images/accomodation/phone.svg';

import './Accomodation.scss';

export const Accomodation = (props) => {
  const accomodation = props.props;

  const icon = (type) => {
    if (type === 'Gîte') {
      return cottage;
    }
    if (type === 'Airbnb') {
      return airbnb;
    }
    if (type === "Chambre d'hôte partenaire") {
      return bnb;
    }
    if (type === 'Hôtel') {
      return hotel;
    }
  };
  return (
    <>
      <div className='accomodation__card'>
        <img className='accomodation__type' src={icon(accomodation.type)} alt={accomodation.type} />
        <h2 className='accomodation__name'>{accomodation.name}</h2>
        <p>
          {' '}
          à {accomodation.distance}km, {accomodation.location}
        </p>

        <div className='accomodation__infos accomodation__infos-space'>
          {accomodation.pax && <p> 👤 {accomodation.pax}</p>}
          {accomodation.rooms && <p> 🔑 {accomodation.rooms}</p>}
          {accomodation.beds && <p> 🛏️ {accomodation.beds}</p>}
        </div>

        <hr />

        {accomodation.info && <p> {accomodation.info}</p>}

        {accomodation.price && <p>Info prix : {accomodation.price}</p>}

        {accomodation.contact && <p>Contact : {accomodation.contact}</p>}

        <hr />

        <div className='accomodation__infos'>
          {accomodation.website && (
            <a href={accomodation.website} target='_blank' rel='noreferrer'>
              <img className='accomodation__icon' src={website} alt={accomodation.website} />
            </a>
          )}

          {accomodation.mail && (
            <a href={`mailto:${accomodation.mail}`}>
              <img className='accomodation__icon' src={email} alt={accomodation.email} />
            </a>
          )}

          {accomodation.phone && (
            <a href={`tel:${accomodation.phone}`}>
              <img className='accomodation__icon' src={phone} alt={accomodation.phone} />
            </a>
          )}
        </div>
      </div>
    </>
  );
};
