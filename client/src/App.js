import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

import './App.scss';

//  Components
import Navbar from './components/Navbar/Navbar';

import { MainPage } from './MainPage';
import { RSVP } from './components/pages/RSVP/RSVP';
import { Traditions } from './components/pages/Traditions/Traditions';
import { Accomodations } from './components/pages/Accomodation/Accomodations';

import NotFound from './components/pages/NotFound/NotFound';
import { WeddingGifts } from './components/pages/WeddingGifts/WeddingGifts';

function App() {
  return (
    <div className='app'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/traditions' element={<Traditions />}></Route>
          <Route path='/hebergement' element={<Accomodations />}></Route>
          <Route path='/rsvp' element={<RSVP />}></Route>
          <Route path='/liste-de-mariage' element={<WeddingGifts />}>
            {' '}
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
