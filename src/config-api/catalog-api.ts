import axios from 'axios';
import { API } from './global-config-api';

export const fetchCatalog = async () => {
  try {
    const response = await API.get('/api/catalog/category/');
    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn('Axios error fetching catalog data', error.message);
    } else {
      console.warn('Unknown error fetching catalog data', error);
    }
  }
};
