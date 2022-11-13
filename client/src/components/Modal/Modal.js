import { useEffect, useRef, useState } from "react";

import "./Modal.scss";
import { IoCloseOutline } from "react-icons/io5";

export default function Modal() {
  const ref = useRef();
  const [openedModal, setOpenedModal] = useState(false);

  const close = () => {
    setOpenedModal(false);
  };
  const open = (e) => {
    setOpenedModal(true);
  };

  useEffect(() => {
    const closeModal = (e) => {
      if (openedModal && ref.current && !ref.current.contains(e.target)) {
        setOpenedModal(false);
      }
    };
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, [openedModal]);

  return (
    <>
      <button className="btn btn--outlined btn--small" onClick={open}>
        Open
      </button>

      {openedModal ? (
        <div className="modal__overlay">
          <div className="modal__wrapper">
            <div className="modal" openedModal={true} ref={ref}>
              <span className="close" onClick={close}>
                <IoCloseOutline />
              </span>
              <div className="modal__content">
                <p>COUCOU c'est la modale</p>

                <button
                  className="btn btn--outlined btn--small"
                  onClick={close}
                >
                  Je participe !
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
