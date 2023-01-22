import React from 'react';

import './Legal.scss';

function LegalNotice() {
  return (
    <>
      <div className='container__image'>
        <body className='page  legal__page'>
          <h1 className='title'>Mentions Légales</h1>
          <hr className='title-rule' />

          <article className='legal__notice'>
            <section className='legal__section'>
              <h1 className=' legal__title legal__item'>Contact</h1>

              <p className='text legal__text legal__item --border-left'>alexetana2023@gmail.com</p>
            </section>

            <section className='legal__section'>
              <h1 className=' legal__title legal__item'>
                Design & <br /> Développement du site
              </h1>
              <p className='text legal__text legal__item --border-left'>
                Léa Baty <br /> leabaty.dev@gmail.com
              </p>
            </section>

            <section className='legal__section'>
              <h1 className=' legal__title legal__item'>
                Formulaire, application de covoiturage & design de la carte
              </h1>
              <p className='text legal__text legal__item --border-left'>Apolline Morelle</p>
            </section>

            <section className='legal__section'>
              <h1 className='legal__title legal__item'>
                Hébergement du site et enregistrement domaine
              </h1>
              <p className='text legal__text legal__item --border-left'>OVH | Netlify | Fly.io</p>
            </section>
          </article>
        </body>
      </div>
    </>
  );
}

export default LegalNotice;
