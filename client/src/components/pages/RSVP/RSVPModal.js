import { useRef, useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { showRSVPModal } from '../../../recoil/atoms';

import mandala from '../../../assets/images/mandala.svg';

import './RSVP.scss';
import { IoCloseOutline } from 'react-icons/io5';

export default function RSVPModal() {
  const ref = useRef();
  const [isOpen, setIsOpen] = useRecoilState(showRSVPModal);
  const [error, setError] = useState(false);
  const [secretCode, setSecretCode] = useState('');

  const close = () => {
    setIsOpen(false);
    setError(false);
  };

  //form filling
  const handleError = () => {
    setError(true);
  };

  const handleChange = (e) => {
    setSecretCode(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(secretCode);
    console.log(process.env.REACT_APP_OPTN1);
    e.preventDefault();
    if (secretCode === process.env.REACT_APP_OPTN1) {
      return console.log(process.env.REACT_APP_FORM1);
    }
    if (secretCode === process.env.REACT_APP_OPTN2) {
      return console.log(process.env.REACT_APP_FORM2);
    }
    if (secretCode === process.env.REACT_APP_OPTN3) {
      return console.log(process.env.REACT_APP_FORM3);
    }
    if (secretCode === process.env.REACT_APP_OPTN4) {
      return console.log(process.env.REACT_APP_FORM4);
    } else {
      return handleError();
    }
  };

  // closing when click on overlay
  useEffect(() => {
    const closeModal = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div className='modal__overlay'>
          <div className='modal__wrapper'>
            <div className='modal' ref={ref}>
              <div className='close' onClick={close}>
                <IoCloseOutline />
              </div>

              <div to='/' className='navbar__title modal__title'>
                <p className='navbar__title'>Ana</p>
                <img className='navbar__icon' src={mandala} alt='mandala' />
                <p className='navbar__title'>Alex</p>
              </div>

              {!error ? (
                <form className='form' onSubmit={handleSubmit}>
                  <div className='modal__content'>
                    <p className='text spacey'>
                      Entrez le code top secret que vous avez reçu dans votre invitation par mail ou
                      whatsapp, sans majuscules.
                    </p>

                    <div className='modal__element'>
                      <input
                        className='modal__input'
                        placeholder='Votre code secret'
                        type='text'
                        name='phone'
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      className='btn btn--outlined btn--small '
                      type='submit' /*onClick={close}*/
                    >
                      C'est parti !
                    </button>
                  </div>
                </form>
              ) : (
                <p className='modal__text'>
                  Allô Houston, on a un souci, ce code ne semble correspondre à rien du tout...
                  Essaie de {''}
                  <a className='bold underlined' href='tel:0033667031701'>
                    contacter Ana {''}
                  </a>
                  pour résoudre le problème !
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
