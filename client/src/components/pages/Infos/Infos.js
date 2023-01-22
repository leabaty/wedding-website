import React from 'react';

import { useViewport } from '../../../utils/useViewport';

import './Infos.scss';

import couple from '../../../assets/images/infos/infos-alex-ana.svg';
import { Directions } from './Directions';
import { Accomodation } from './Accomodation';
import { Organization } from './Organization';

export function Infos() {
  const { width } = useViewport();

  return (
    <>
      <section className='container__image'>
        {width < process.env.REACT_APP_BREAKPOINT ? (
          ''
        ) : (
          <>
            <div className='page'>
              {/* <h1 className='title'>Infos Pratiques</h1>
              <hr className='title-rule' /> */}
              <img className='category-img' src={couple} alt='Alex et Ana' />
            </div>
          </>
        )}

        <Directions />
        <Accomodation />
        <Organization />
      </section>
    </>
  );
}
