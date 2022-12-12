import React from 'react';

import './Carousel.scss';

export const Carousel = (props) => {
  return (
    <div class='slider'>
      <div class='slide-track'>
        {props.props.map((img) => {
          return (
            <div className='slide' key={img.id}>
              <img className='slide-img' src={img.url} alt={img.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
