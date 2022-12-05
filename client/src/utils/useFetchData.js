import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData = (URL) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(`https://alex-and-ana.fly.dev/${URL}`);
      setData(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;
