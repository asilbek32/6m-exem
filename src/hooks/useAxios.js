import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://68de6779d7b591b4b78f6e25.mockapi.io/${url}`)
      .then((res) => setData(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  return { loading, error, data };
};
