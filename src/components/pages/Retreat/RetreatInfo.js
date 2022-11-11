import React from "react";

import "./RetreatInfo.scss"

// REACT ICONS
import { BsPeopleFill, BsCalendarWeek, BsPinMapFill } from "react-icons/bs";
import { GiLotus } from "react-icons/gi";

function RetreatInfo(data) {
  return (
    <>
      <div className="retreat__info">
        <div className="retreat__info__container">
          <div className="retreat__info__item">
            <BsCalendarWeek className="retreat__info__item__icon" />
            <p className="retreat__info__item__characteristics">
              {data.data.startDate} - {data.data.endDate}
            </p>
          </div>

          <div className="retreat__info__item">
            <BsPeopleFill className="retreat__info__item__icon" />
            <p className="retreat__info__item__characteristics">
              {data.data.maxPax}
            </p>
          </div>

          <div className="retreat__info__item">
            <GiLotus className="retreat__info__item__icon" />
            <div className="retreat__info__item__characteristics">
              <a href={data.data.spotWebsite} target="_blank">
                {data.data.spot}
              </a>
              <p>{data.data.inscriptionEmail}</p>
            </div>
          </div>

          <div className="retreat__info__item">
            <BsPinMapFill className="retreat__info__item__icon" />
            <div className="retreat__info__item__characteristics">
              <ol>
                {data.data.address.map((addrLine, index) => {
                  return <li key={addrLine}>{addrLine}</li>;
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RetreatInfo;
