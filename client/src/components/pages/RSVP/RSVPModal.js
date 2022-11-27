import { useRef, useState } from "react";
import { useRecoilState } from 'recoil'
import { showRSVPModal} from "../../../recoil/atoms";

import mandala from "../../../assets/images/mandala.svg";

import "./RSVP.scss";
import { IoCloseOutline } from "react-icons/io5";

export default function RSVPModal() {
  const ref = useRef();
  const [isOpen, setIsOpen]= useRecoilState(showRSVPModal);

  const [isSubmit, setIsSubmit] = useState(false);
  const [secretPIN, setSecretPIN] = useState("");

  //form filling
  const handleChange = (e) => {
    setSecretPIN(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    openRSVPForm();
  };

  const openRSVPForm = () => {
    console.log(secretPIN);
  };

  const close = () => {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen ? (
        <div className="modal__overlay">
          <div className="modal__wrapper">
            <div className="modal" ref={ref}>
              <div className="close" onClick={close}>
                <IoCloseOutline />
              </div>
              {!isSubmit ? (
                <form className="form" onSubmit={handleSubmit}>
                  <div className="modal__content">
                    <div to="/" className="navbar__title">
                      <p className="navbar__title">Ana</p>
                      <img
                        className="navbar__icon"
                        src={mandala}
                        alt="mandala"
                      />
                      <p className="navbar__title">Alex</p>
                    </div>

                    <p className="text spacey">
                      Entrez le code top secret que vous avez reçu dans votre
                      invitation par mail ou whatsapp, sans majuscules.
                    </p>

                    <div className="modal__element">
                      <input
                        className="modal__input"
                        placeholder="Votre code secret"
                        type="text"
                        name="phone"
                        onChange={handleChange}
                      />
                    </div>
                    <p className="text">
                      Allô Houston, on a un souci, ce code ne semble
                      correspondre à rien du tout... Essaie de {""}
                      <a className="bold underlined" href="tel:0033667031701">
                        contacter Ana {""}
                      </a>
                      pour résoudre le problème !
                    </p>

                      <button
                        className="btn btn--outlined btn--small "
                        onClick={close}
                      >
                        C'est parti !
                      </button>
                   
                  </div>
                </form>
              ) : (
                <>
                  <p className="text">Niania</p>
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
