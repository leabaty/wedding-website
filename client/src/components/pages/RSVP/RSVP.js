import React, { useState } from 'react';

import './RSVP.scss';
import RSVPModal from './RSVPModal';

export const RSVP = () => {
  return (
    <>
      <article className='container__image'>
        <div className='page'>
          <RSVPModal />
        </div>
      </article>
    </>
  );
};
