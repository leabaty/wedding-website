import React from 'react';

import './RSVP.scss';

import Jotform from 'react-jotform';

export const RSVP = () => {
  return (
    <>
      <article className='container__image'>
        <div className='page'>
          <Jotform src='https://form.jotform.com/223165441357050' />
        </div>
      </article>
    </>
  );
};
