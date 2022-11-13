import React from "react";

import "./Article.scss";

function ArticleOld({ articles }) {

  return (
    <>
      {articles.map((article, index) => {
        return (
          <article className="article__container" key={article.id}>
            <div
              className={
                article.imgStart === "start"
                  ? "article__row-reverse"
                  : "article__row"
              }
            >
              <section className="article__col">
                <div className="article__text-wrapper">
                  <h1 className="heading article__heading">
                    {article.headLine}
                  </h1>

                  {article.text.map((paragraph) => {
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
                  <img
                    src={article.img_url}
                    alt={article.img_alt}
                    className="article__img"
                  />
                </div>
              </section>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default ArticleOld;
