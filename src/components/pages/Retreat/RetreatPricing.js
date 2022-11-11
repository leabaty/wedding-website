import React from "react";

import "./RetreatPricing.scss"

// REACT ICONS
import { BsCheck2Circle } from "react-icons/bs";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { RiInformationLine } from "react-icons/ri";

function RetreatPricing(data) {

  return (
    <>
      <section className="retreat__section">
        <aside className="retreat__pricing__container">
          <div className="retreat__pricing__item">
            <BsCheck2Circle className="retreat__pricing__item-icon" />

            <h3 className="undertitle">Ce prix inclut:</h3>
            <ol>
              {data.data.priceIncludes.map((inclusion) => {
                return (
                  <li
                    key={inclusion}
                    className="retreat__pricing__item-characteristic"
                  >
                    {inclusion}
                  </li>
                );
              })}
              <li className="retreat__pricing__item-characteristic">
                {" "}
                Les cours et ateliers ({data.data.classesPrice} €)
              </li>
            </ol>
          </div>

          <div className="retreat__pricing__item">
            <MdDoNotDisturbAlt className="retreat__pricing__item-icon" />
            <h3 className="undertitle">Ce prix n'inclut pas:</h3>
            <ol>
              {data.data.priceExcludes.map((exclusion) => {
                return (
                  <li
                    key={exclusion}
                    className="retreat__pricing__item-characteristic"
                  >
                    {exclusion}
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="retreat__pricing__item">
            <RiInformationLine className="retreat__pricing__item-icon" />
            <h3 className="undertitle">Informations de paiement</h3>
            <p className="retreat__pricing__item-characteristic">
              {data.data.paymentDetails}
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

export default RetreatPricing;
