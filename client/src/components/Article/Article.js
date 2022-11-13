import React from "react";

import "./Article.scss";

import FadeInFromLeft from "../../utils/FadeInFromLeft";
import FadeInFromRight from "../../utils/FadeInFromRight";

function Article({ id, imgStart, headLine, text, img_url, img_alt }) {
  return (
    <>
      {imgStart === "start" ? (
        <article className="article__container" key={id}>
          <div className="article__row-reverse">
            <section className="article__col">
              <div className="article__text-wrapper">
                <h1 className="heading article__heading">{headLine}</h1>

                {text.map((paragraph) => {
                  return (
                    <p key={paragraph} className="article__text">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </section>

            <section className="article__col">
              <div className="article__img-wrapper">
                <FadeInFromLeft>
                  <img src={img_url} alt={img_alt} className="article__img" />
                </FadeInFromLeft>
              </div>
            </section>
          </div>
        </article>
      ) : (
        <article className="article__container" key={id}>
          <div className="article__row">
            <section className="article__col">
              <div className="article__text-wrapper">
                <h1 className="heading article__heading">{headLine}</h1>

                {text.map((paragraph) => {
                  return (
                    <p key={paragraph} className="article__text">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </section>

            <section className="article__col">
              <div className="article__img-wrapper">
                <FadeInFromRight>
                  <img src={img_url} alt={img_alt} className="article__img" />
                </FadeInFromRight>
              </div>
            </section>
          </div>
        </article>
      )}
    </>
  );
}

export default Article;
