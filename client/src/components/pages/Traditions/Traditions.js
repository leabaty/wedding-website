import React from 'react';

import './Traditions.scss';

import traditions from '../../../data/traditions.json';
import dresses from '../../../data/dresses.json';

import TraditionArticle from './TraditionArticle';
import DressesArticle from './DressesArticle';

export const Traditions = () => {
  return (
    <>
      <article className='container__image'>
        <div className='page'>
          <h1 className='title'> Les traditions </h1>
          <TraditionArticle props={traditions} />
          <h1 className='title'> Les tenues </h1>
          <DressesArticle props={dresses} />
        </div>
      </article>
    </>
  );
};
