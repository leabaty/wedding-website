import { useRef, useState } from 'react';

import mandala from '../../../assets/images/mandala.svg';

// import './Modal.scss';
import './RSVP.scss';
import { IoCloseOutline } from 'react-icons/io5';

export default function RSVPModal() {
  const ref = useRef();
  const [openedModal, setOpenedModal] = useState(true);

  const [isSubmit, setIsSubmit] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  //form filling
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    sendData();
  };

  const sendData = () => {
    console.log(phoneNumber);
  };

  // modal operating
  const close = () => {
    setOpenedModal(false);
  };
  const open = (e) => {
    setOpenedModal(true);
  };

  return (
    <>
      {openedModal ? (
        <div className='modal__overlay--opaque'>
          <div className='modal__wrapper'>
            <div className='modal' openedModal={true} ref={ref}>
              <a className='close' href='/' alt='homepage'>
                <IoCloseOutline />
              </a>
              {!isSubmit ? (
                <form className='form' onSubmit={handleSubmit}>
                  <div className='modal__content'>
                    <div to='/' className='navbar__title'>
                      <p className='navbar__title'>Ana</p>
                      <img className='navbar__icon' src={mandala} alt='mandala' />
                      <p className='navbar__title'>Alex</p>
                    </div>

                    <p className='text spacey'>
                      Entrez le code top secret que vous avez reçu dans votre invitation par mail ou
                      whatsapp, sans majuscules.
                    </p>

                    <div className='modal__element'>
                      <input
                        className='modal__input'
                        placeholder='Phone'
                        type='text'
                        name='phone'
                        onChange={handleChange}
                      />
                    </div>
                    <p className='text'>
                      Allô Houston, on a un souci, ce code ne semble correspondre à rien du tout...
                      Essaie de {''}
                      <a className='bold underlined' href='tel:0033667031701'>
                        contacter Ana {''}
                      </a>
                      pour résoudre le problème !
                    </p>

                    <div className='rsvp__modal__buttons'>
                      <button className='btn btn--outlined btn--small ' onClick={close}>
                        <a href='/' alt='homepage'>
                          Revenir en arrière
                        </a>
                      </button>

                      <button className='btn btn--outlined btn--small ' onClick={close}>
                        C'est parti !
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <>
                  <p className='text'>Niania</p>
                </>
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
