import { useEffect, useRef, useState } from 'react';

import usePatchData from '../../../utils/usePatchData.js';
import usePostData from '../../../utils/usePostData.js';
import useSendEmail from '../../../utils/useSendEmail.js';

import '../../Modal/Modal.scss';
import { IoCloseOutline } from 'react-icons/io5';
import useSendEmail from '../../../utils/useSendEmail.js';

export default function Modal(props) {
  const ref = useRef();
  const [openedModal, setOpenedModal] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    amount: '',
    activity: '',
  });
  const [participationType, setParticipationType] = useState('');

  const validate = (value, price, savedAmount) => {
    const errors = {};

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    const regexAmount = /^\d+$/;

    const maxAmount = price - savedAmount;

    if (!value.firstname) {
      errors.firstname = "⚠ Allez, dis-moi comment tu t'appelles";
    }
    if (!value.lastname) {
      errors.lastname = "⚠ Allez, dis-moi comment tu t'appelles";
    }
    if (!value.email) {
      errors.email = "⚠ Promis je t'envoie pas de spams !";
    } else if (!regexEmail.test(value.email)) {
      errors.email = '⚠ Essaie encore, le format est bizarre non ?';
    }
    if (!value.amount) {
      errors.amount = "⚠ Je crois qu'il manque un petit quelque chose...";
    }
    if (!regexAmount.test(value.amount)) {
      errors.amount = '⚠ Tu sais ce qui est bon ? Les chiffres ronds !';
    }
    if (value.amount > maxAmount) {
      errors.amount = `⚠ Pour atteindre notre but, il ne reste que ${maxAmount} € à compléter !`;
    }
    if (value.amount > price) {
      errors.amount = `⚠ C'est adorable, mais le prix de cette activité est ${price} € !`;
    }
    return errors;
  };

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

    setFormErrors(validate(formData, props.props.price, props.props.amount));

    setFormData((prevState) => {
      return {
        ...prevState,
      };
    });
  };

  // Axios requests
  const updateParticipation = usePatchData('updateGift', props.props._id, {
    amount: +formData.amount,
  });
  const saveParticipation = usePostData('saveParticipation', formData);

  const sendEmail = useSendEmail('emailRecap', {
    ...formData,
    gift: props.props.title,
    type: participationType,
  });

  // if there are no errors and the form is Submit, send it
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      updateParticipation();
      setIsSent(true);
      saveParticipation();
      sendEmail();
    }
  }, [formErrors]);

  // modal behavior
  useEffect(() => {
    const closeModal = (e) => {
      if (openedModal && ref.current && !ref.current.contains(e.target)) {
        setOpenedModal(false);
      }
    };

    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [openedModal]);

  return (
    <>
      <button className='gift__button btn' onClick={open}>
        Je participe !
      </button>

      {openedModal ? (
        <div className='modal__overlay'>
          <div className='modal__wrapper'>
            <div className='modal' ref={ref}>
              <span className='close' onClick={close}>
                <IoCloseOutline />
              </span>
              {!isSent ? (
                <form className='form' onSubmit={handleSubmit}>
                  <div className='modal__content'>
                    <p className='title title--small'>{props.props.title}</p>
                    <div className='modal__element'>
                      <input
                        className='modal__input'
                        placeholder='Prénom'
                        type='text'
                        name='firstname'
                        onChange={handleChange}
                        value={formData.firstname}
                      />
                      <p className='form__warning'>{formErrors.firstname}</p>
                    </div>
                    <div className='modal__element'>
                      {' '}
                      <input
                        className='modal__input'
                        placeholder='Nom'
                        type='text'
                        name='lastname'
                        onChange={handleChange}
                        value={formData.lastname}
                      />
                      <p className='form__warning'>{formErrors.lastname}</p>
                    </div>

                    <div className='modal__element'>
                      {' '}
                      <input
                        className='modal__input'
                        placeholder='Email'
                        type='text'
                        name='email'
                        onChange={handleChange}
                        value={formData.email}
                      />
                      <p className='form__warning'>{formErrors.email}</p>
                    </div>

                    <div className='modal__element'>
                      {' '}
                      <textarea
                        className='modal__input --text'
                        placeholder='Un joli message pour nos heureux mariés'
                        type='text'
                        name='message'
                        onChange={handleChange}
                        value={formData.message}
                      />
                    </div>

                    <div className='modal__element'>
                      <input
                        className='modal__input'
                        placeholder='Montant en €'
                        type='text'
                        name='amount'
                        onChange={handleChange}
                        value={formData.amount}
                      />
                      <p className='form__warning'>{formErrors.amount}</p>
                    </div>

                    {/* <button
                      className='gift__button btn'
                      // onClick={}
                    >
                      Je participe !
                    </button> */}

                    <div className='gift__buttons'>
                      <button
                        className='gift__button btn'
                        onClick={() => setParticipationType('En ligne')}
                      >
                        Je participe en ligne
                      </button>

                      <button
                        className='gift__button btn'
                        onClick={() => setParticipationType('Le jour du mariage')}
                      >
                        Je participe le jour du mariage
                      </button>
                    </div>
                  </div>

                  {Object.keys(formErrors).length !== 0 ? (
                    <p>Essaie encore : Le formulaire contient des erreurs !</p>
                  ) : (
                    ''
                  )}
                </form>
              ) : (
                <>
                  {' '}
                  <p className='text'>
                    Merci pour cette attention, ça nous fait tellement plaisir.
                  </p>
                  {participationType === 'En ligne' && (
                    <div>
                      Pour participer en ligne, c'est
                      <a
                        target='_blank'
                        href='https://lydia-app.com/pots?id=42660-mariage-ana-alex'
                        rel='noreferrer'
                      >
                        <button className='gift__button btn'>Par ici !</button>
                      </a>
                    </div>
                  )}
                  {participationType === 'Le jour du mariage' && (
                    <div>
                      Nous mettrons une "boite à enveloppes" à disposition lors de notre mariage
                      pour recueillir vos participations.
                    </div>
                  )}
                  <p className='text'>
                    Tu recevras également un mail sous peu afin de garder trace.
                  </p>
                  <strong className='bold'>Encore une fois : Un grand merci !</strong>
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
