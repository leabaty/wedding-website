import React from 'react';

import './Traditions.scss';

import coupleTraditions from '../../../assets/images/traditions/alex-ana-traditions.svg';

import traditions from '../../../data/traditions.json';
import dresses from '../../../data/dresses.json';

import TraditionArticle from './TraditionArticle';
import DressesArticle from './DressesArticle';

export const Traditions = () => {
  return (
    <>
      <main className='container__image'>
        <div className='page'>
          <h1 className='title'> Traditions </h1>
          <hr className='title-rule' />
          <img className='category-img' src={coupleTraditions} alt='Alex et Ana' />
          <h1 className='title'> Indiennes & Françaises </h1>
          <TraditionArticle props={traditions} />
          <h1 className='title'> Les tenues </h1>
          <DressesArticle props={dresses} />
        </div>
      </main>
    </>
  );
};
