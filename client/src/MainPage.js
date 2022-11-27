import React from 'react';

import { Home } from './components/pages/Home/Home';
import { Program } from './components/pages/Program/Program';
import { Infos } from './components/pages/Infos/Infos';
import { Music } from './components/pages/Music/Music';
import { WeddingGifts } from './components/pages/WeddingGifts/WeddingGifts';

export const MainPage = () => {
  return (
    <>
      <Home />
      <Program />
      <Infos />
      <WeddingGifts />
      <Music />
    </>
  );
};
