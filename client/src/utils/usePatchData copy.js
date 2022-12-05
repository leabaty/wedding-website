import { useEffect } from 'react';
import axios from 'axios';

const usePatchData = (URL, id, data) => {
  const patchData = async () => {
    try {
      const response = await axios.patch(`https://alex-and-ana.fly.dev/${URL}/${id}`, data);
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    patchData();
  }, []);
};

export default usePatchData;
