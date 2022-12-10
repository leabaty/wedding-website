import axios from 'axios';

const usePostData = (URL, data) => {
  const postData = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_SERVER + URL, data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return postData;
};

export default usePostData;
