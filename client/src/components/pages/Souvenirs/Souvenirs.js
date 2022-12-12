import React from 'react';

import data from '../../../data/carousel.json';
import { Carousel } from '../../Carousel/Carousel';

export const Souvenirs = () => {
  return (
    <>
      <article className='container__full'>
        <Carousel props={data} />
      </article>
    </>
  );
};
