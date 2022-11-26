import React from 'react';

import './TraditionArticle.scss';

import india from '../../../assets/images/traditions/taj-mahal.svg';
import france from '../../../assets/images/traditions/eiffel-tower.svg';

function TraditionArticle({ props }) {
  return (
    <>
      {props.map((article) => {
        return (
          <article className='article__container' key={article.id}>
            <div className={article.img_start === 'start' ? 'article__start' : 'article__end'}>
              <div className='article__col'>
                <div className='article__text-wrapper'>
                  <h1
                    className={
                      article.img_start === 'start'
                        ? 'article__title article__start__text'
                        : 'article__title article__end__text'
                    }
                  >
                    {article.tradition === 'india' ? (
                      <img className='article__icon' src={india} />
                    ) : (
                      <img className='article__icon' src={france} />
                    )}
                    {article.title}
                  </h1>

                  {article.desc.map((paragraph) => {
                    return (
                      <p
                        key={paragraph}
                        className={
                          article.img_start === 'start'
                            ? 'article__start__text'
                            : 'article__end__text'
                        }
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>

              <div className='article__col'>
                <div className='article__img-wrapper'>
                  <img src={article.img_url} alt={article.title} className='article__img' />
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default TraditionArticle;
