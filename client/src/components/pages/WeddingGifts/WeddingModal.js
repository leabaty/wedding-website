import { useEffect, useRef, useState } from "react";

import usePatchData from '../../../utils/usePatchData.js'

import "../../Modal/Modal.scss";
import { IoCloseOutline } from "react-icons/io5";

export default function Modal(props) {
  const ref = useRef();
  const [isSubmit, setIsSubmit] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    message: "",
    amount: "",
    activity: "",
  });

  //Modal
  const close = () => {
    setOpenedModal(false);
  };
  const open = (e) => {
    setOpenedModal(true);
  };

  //form filling
  const handleChange = (event) => {
    const value = event.target.value;

    setFormData({
      ...formData,
      [event.target.name]: value,
      activity: props.props._id,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmit(true);

    setFormData((prevState) => {
      return {
        ...prevState,
      };
    });
    sendData();
    usePatchData("updateGift", props.props._id, formData.amount);
  };

  const sendData = () => {
    console.log(formData);
  };

  // modal
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
      <button className="gift__button btn" onClick={open}>
        Je participe !
      </button>

      {openedModal ? (
        <div className="modal__overlay">
          <div className="modal__wrapper">
            <div className="modal" ref={ref}>
              <span className="close" onClick={close}>
                <IoCloseOutline />
              </span>
              {!isSubmit ? (
                <form className="form" onSubmit={handleSubmit}>
                  <div className="modal__content">
                    <p className="title title--small">{props.props.title}</p>
                    <div className="modal__element">
                      <input
                        className="modal__input"
                        placeholder="Prénom"
                        type="text"
                        name="firstname"
                        onChange={handleChange}
                        value={formData.firstname}
                      />
                    </div>
                    <div className="modal__element">
                      {" "}
                      <input
                        className="modal__input"
                        placeholder="Nom"
                        type="text"
                        name="lastname"
                        onChange={handleChange}
                        value={formData.lastname}
                      />
                    </div>

                    <div className="modal__element">
                      {" "}
                      <textarea
                        className="modal__input --text"
                        placeholder="Un joli message pour nos heureux mariés"
                        type="text"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                      />
                    </div>

                    <div className="modal__element">
                      <input
                        className="modal__input"
                        placeholder="Montant en €"
                        type="text"
                        name="amount"
                        onChange={handleChange}
                        value={formData.amount}
                      />
                    </div>

                    <button
                      className="gift__button btn"
                      // onClick={}
                    >
                      Je participe !
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  {" "}
                  <p className="text">
                    Merci pour votre participation. Pour payer en ligne, c'est
                  </p>
                  <a target="_blank" href="https://www.google.com">
                    <button className="gift__button btn">Par ici !</button>
                  </a>
                  <p className="text">
                    Mais si vous préférez, vous pouvez nous laisser une
                    enveloppe lors de notre mariage.
                  </p>
                  <strong className="bold">Un grand merci !</strong>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
