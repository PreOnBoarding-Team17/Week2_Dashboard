import axios, { AxiosInstance } from 'axios';
import { DataInterface } from 'Utils/Interface';

const BASE_URL = '/requests';

export const callAPI: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
});

export const getAPI = async () => {
  const response = await axios.get<DataInterface>(BASE_URL);
  return response.data;
};
