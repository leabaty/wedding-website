import axios from 'axios';

const useSendEmail = (URL, data) => {
  const sendEmail = async () => {
    try {
      await axios.post(process.env.REACT_APP_SERVER + URL, data);
    } catch (error) {
      console.log(error);
    }
  };

  return sendEmail;
};

export default useSendEmail;
