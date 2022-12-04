import React from 'react';
import { Accomodation } from './Accomodation';

import data from '../../../data/accomodation.json';

export const Accomodations = () => {
  return (
    <>
      <article className='container__image'>
        <div className='page'>
          <h1 className='title'> Les hébergements </h1>

          <div className='accomodation__list'>
            {data.map((accomodation) => (
              <Accomodation key={accomodation.name} props={accomodation} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
