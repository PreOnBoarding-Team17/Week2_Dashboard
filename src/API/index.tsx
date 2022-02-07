import axios from 'axios';
import { DataInterface } from 'Utils/Interface';

const BASE_URL = 'http://localhost:4000/requests';

export const getAPI = async () => {
  const response = await axios.get<DataInterface>(BASE_URL);
  return response.data;
};
