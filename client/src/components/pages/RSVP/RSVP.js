import React from 'react';
import { useLocation } from 'react-router-dom';

import './RSVP.scss';

import Jotform from 'react-jotform';

export const RSVP = () => {
  const location = useLocation();

  return (
    <>
      <Jotform src={location.state.form} />
    </>
  );
};
