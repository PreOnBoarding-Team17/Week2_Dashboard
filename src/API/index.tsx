import axios from 'axios';

const BASE_URL = 'http://localhost:4000/requests';

export const getAPI = async () => {
  const response = await axios.get(BASE_URL);
  const data = await response.data;
  return data;
};
