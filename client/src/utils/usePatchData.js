import axios from 'axios';

const usePatchData = (URL, id, data) => {
  const patchData = async () => {
    try {
      const response = await axios.patch(`${process.env.REACT_APP_SERVER + URL}/${id}`, data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return patchData;
};

export default usePatchData;
