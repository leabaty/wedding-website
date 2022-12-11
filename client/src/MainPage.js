import React from 'react';

import { Home } from './components/pages/Home/Home';
import { Program } from './components/pages/Program/Program';
import { Infos } from './components/pages/Infos/Infos';
import { Music } from './components/pages/Music/Music';

export const MainPage = () => {
  return (
    <>
      <Home />
      <Program />
      <Infos />
      <Music />
    </>
  );
};
