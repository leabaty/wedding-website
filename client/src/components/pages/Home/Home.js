import React from 'react';

import './Home.scss';
import { HomeDesktop } from './HomeDesktop';
import { HomeMobile } from './HomeMobile';

import { useViewport } from '../../../utils/useViewport';

export const Home = () => {
  const { width } = useViewport();
  const breakpoint = 880;

  return width < breakpoint ? <HomeMobile /> : <HomeDesktop />;
};
