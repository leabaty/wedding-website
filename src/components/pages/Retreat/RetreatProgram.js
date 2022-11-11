import React from "react";

import "./RetreatProgram.scss"

function RetreatProgram(program) {
  return (
    <>
      <section className="retreat__section retreat__program">
        <h2 className="title title--medium retreat__program__title">
          Au Programme
        </h2>
        <div className="retreat__program__container">
          {program.program.map((programItem) => {
            return (

              <div key={programItem.description} className="retreat__program__item">
                <p className="retreat__program__item-time">
                  {programItem.startTime} - {programItem.endTime}
                </p>
                <p className="retreat__program__item-characteristic">
                  {programItem.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default RetreatProgram;
