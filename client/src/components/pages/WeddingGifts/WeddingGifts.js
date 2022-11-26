import React from 'react';

import './WeddingGifts.scss';

import couple from '../../../assets/images/wedding-gifts/wedding-gifts-couple.svg';

import { WeddingGift } from './WeddingGift';
import Modal from '../../Modal/Modal';

export const WeddingGifts = () => {
  return (
    <>
      <article className='container__full'>
        <div className='page'>
          <h1 className='title'>Liste de Mariage</h1>
          <hr className='title-rule' />
          <img className='category-img' src={couple} alt='Alex et Ana' />
          <WeddingGift />
        </div>
      </article>
    </>
  );
};
