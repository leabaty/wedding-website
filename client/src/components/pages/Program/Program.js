import React from 'react';

import './Program.scss';

import Thirty20 from '../../../assets/images/program/30-20.svg';
import Thirty18 from '../../../assets/images/program/30-18.svg';
import Thirty14 from '../../../assets/images/program/30-14.svg';
import First16 from '../../../assets/images/program/1-16.svg';
import First17 from '../../../assets/images/program/1-17.svg';
import First20 from '../../../assets/images/program/1-20.svg';
import First22 from '../../../assets/images/program/1-22.svg';
import Second11 from '../../../assets/images/program/2-11.svg';
import Second19 from '../../../assets/images/program/2-19.svg';

export function Program() {
  return (
    <>
      <article className='container__full' id='program'>
        <div className='page'>
          <h1 className='title'>Au programme</h1>
          <hr className='title-rule' />

          <div className='program__art-container'>
            <div className='program__art'>
              <h2 className='undertitle'>Vendredi 30 Juin</h2>

              <div className='program__act'>
                <img src={Thirty14} className='program__ico' alt='icon' />
                <p className='program__txt'>
                  14h - Mariage civil initimiste & vin d’honneur{' '}
                  {/* <span className='text--small'>(à Vincennes)</span> */}
                </p>
              </div>

              <div className='program__act'>
                <img src={Thirty18} className='program__ico' alt='icon' />
                <p className='program__txt'>
                  18h – déco par les témoins <span className='text--small'>(à Choue)</span>
                  <br />
                  19h – rattrapage déco par la décoratrice
                </p>
              </div>

              <div className='program__act'>
                <img src={Thirty20} className='program__ico' alt='icon' />
                <p className='program__txt'>20h - Barbeuc’ party</p>
              </div>
            </div>

            <div className='program__art'>
              <h2 className='undertitle'>Samedi 1er Juillet</h2>
              <div className='program__act'>
                <img src={First16} className='program__ico' alt='icon' />
                <p className='program__txt'>16h - Cérémonie Laïque</p>
              </div>

              <div className='program__act'>
                <img src={First17} className='program__ico' alt='icon' />
                <p className='program__txt'>17h - Cocktail & Mehndi party</p>
              </div>

              <div className='program__act'>
                <img src={First20} className='program__ico' alt='icon' />
                <p className='program__txt'>20h - Diner</p>
              </div>

              <div className='program__act'>
                <img src={First22} className='program__ico' alt='icon' />
                <p className='program__txt'>22h - Soirée dansante</p>
              </div>
            </div>

            <div className='program__art'>
              <h2 className='undertitle'>Dimanche 2 Juillet</h2>
              <div className='program__act'>
                <img src={Second11} className='program__ico' alt='icon' />
                <p className='program__txt'>11h - Brunch comme à la maison</p>
              </div>

              <div className='program__act'>
                <img src={Second19} className='program__ico' alt='icon' />
                <p className='program__txt'>19h - Repos du guerrier</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
