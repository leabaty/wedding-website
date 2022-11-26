import React from 'react';

import './Traditions.scss';
import data from '../../../data/traditions.json';
import TraditionArticle from './TraditionArticle';

export const Traditions = () => {
  return (
    <>
      <article className='container__image'>
        <div className='page'>
          <h1 className='title'> Les traditions </h1>
          <TraditionArticle props={data} />
        </div>
      </article>
    </>
  );
};
