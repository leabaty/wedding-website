import React from 'react';

import './Home.scss';
import { HomeDesktop } from './HomeDesktop';
import { HomeMobile } from './HomeMobile';

import { useViewport } from '../../../utils/useViewport';

export const Home = () => {
  const { width } = useViewport();

  return width < process.env.REACT_APP_BREAKPOINT ? <HomeMobile /> : <HomeDesktop />;
};
