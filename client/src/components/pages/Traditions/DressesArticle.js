import React from 'react';

import './DressesArticle.scss';

function DressesArticle({ props }) {
  return (
    <>
      <div className='dresses__container'>
        {props.map((article) => {
          return (
            <article className='dresses__card' key={article.id}>
              <h2 className='dresses__title'>{article.title}</h2>

              <div className='dresses__img-wrapper'>
                <img className='dresses__img' src={article.img_url} alt={article.title} />
              </div>

              <div className='dresses__text-wrapper'>
                {article.desc.map((paragraph) => {
                  return <p key={paragraph}>{paragraph}</p>;
                })}
              </div>
            </article>
          );
        })}
      </div>

      <div>
        {' '}
        <h2 className='undertitle'>Où me procurer une tenue indienne ?</h2>
        <p>
          <a href='https://www.sareeka.com' target='_blank'>
            👉 Sareeka sur www.sareeka.com
          </a>
          : Rapport qualité prix imbattable !
        </p>
        <p>
          <a href='https://www.benzerworld.com' target='_blank'>
            👉 Benzer sur www.benzerworld.com
          </a>
          : Pour des tenues plus travaillées
        </p>
        <p>
          {' '}
          Nous vous déconseillons les boutiques à la gare du nord de Paris, les tenues sont
          majoritairement chères et de mauvaise qualité.{' '}
        </p>
        <p>
          En revanche vous pourrez y faire coudre facilement vos tops appelés "blouses" sur-mesure.
          Demandez-leur le catalogue de modèles. On vous conseille Alankar Tailor au 20 rue
          Demarquay, 75010 Paris (01 42 05 26 93).
        </p>
        <h2 className='undertitle'>Mais on s’habille tous à l’indienne ?</h2>{' '}
        <p>
          Absolument pas ! Habillez-vous comme vous voulez, c’est juste qu’on n’a pas estimé
          nécessaire d’expliquer les différents types de robes françaises ^^.
        </p>{' '}
      </div>
    </>
  );
}

export default DressesArticle;
