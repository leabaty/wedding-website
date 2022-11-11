import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "./RetreatAccomodation.scss";

import { FaShower, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { BsPeopleFill } from "react-icons/bs";

function RoomDetailSlider({ accomodation }) {

  // SLICK-CAROUSEL
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next arrows-slide" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev arrows-slide" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  // SLIDE RESPONSIVENESS
  const [imageIndex, setImageIndex] = useState(0);
  const [mobileMode, setMobileMode] = useState(false);

  const settingsDesktop = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    centerMode: true,
    speed: 300,
    slidesToShow: 3,
    centerPadding: 0,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const settingsMobile = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerPadding: 0,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const changeViewMode = () => {
    if (window.innerWidth <= 960) {
      setMobileMode(true);
    } else {
      setMobileMode(false);
    }
  };

  window.addEventListener("resize", changeViewMode);

  useEffect(() => {
    changeViewMode();
  }, []);

  return (
    <>
      {mobileMode ? (
        <Slider {...settingsMobile}>
          {accomodation.map((accomodationItem, index) => {
            return (
              <div
                className={index === imageIndex ? "slide activeSlide" : "slide"}
                //ce qu'on veut ici c'est mettre en valeur l'image courante.
                // Si l'index de l'image dans le tableau d'objets matche avec l'index du
                // tableau, ça veut dire qu'elle est l'image courante et qu'on peut donc
                // lui appliquer un style pour la mettre en valeur.
                key={accomodationItem.room}
              >
                <h1 className="title slide__title">{accomodationItem.room}</h1>
                <img
                  className="slide__img"
                  src={accomodationItem.img_url}
                  alt={accomodationItem.room}
                />

                <div className="slide__characteristics">
                  <div className="slide__characteristics__item">
                    <BsPeopleFill className="slide__characteristics__item-icon" />
                    <p className="slide__characteristics__item-info">
                      {accomodationItem.availableSpots}
                    </p>
                  </div>

                  <div className="slide__characteristics__item">
                    <FaShower className="slide__characteristics__item-icon" />
                    <p className="slide__characteristics__item-info">
                      {accomodationItem.bathroom}
                    </p>
                  </div>
                </div>
                <p className="slide__price">{accomodationItem.price} €</p>
              </div>
            );
          })}
        </Slider>
      ) : (
        <Slider {...settingsDesktop}>
          {accomodation.map((accomodationItem, index) => {
            return (
              <div
                className={index === imageIndex ? "slide activeSlide" : "slide"}
                //ce qu'on veut ici c'est mettre en valeur l'image courante.
                // Si l'index de l'image dans le tableau d'objets matche avec l'index du
                // tableau, ça veut dire qu'elle est l'image courante et qu'on peut donc
                // lui appliquer un style pour la mettre en valeur.
                key={accomodationItem.room}
              >
                <h1 className="title slide__title">{accomodationItem.room}</h1>
                <img
                  className="slide__img"
                  src={accomodationItem.img_url}
                  alt={accomodationItem.room}
                />

                <div className="slide__characteristics">
                  <div className="slide__characteristics__item">
                    <BsPeopleFill className="slide__characteristics__item-icon" />
                    <p className="slide__characteristics__item-info">
                      {accomodationItem.availableSpots}
                    </p>
                  </div>

                  <div className="slide__characteristics__item">
                    <FaShower className="slide__characteristics__item-icon" />
                    <p className="slide__characteristics__item-info">
                      {accomodationItem.bathroom}
                    </p>
                  </div>
                </div>
                <p className="slide__price">{accomodationItem.price} €</p>
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
}

export default RoomDetailSlider;
