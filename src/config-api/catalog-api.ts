import axios from 'axios';
import { APIEXTRA } from './global-config-api';

export const fetchCatalog = async () => {
  try {
    const data = await APIEXTRA.get('/api/catalog/category/');
    return data.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn('Axios error fetching catalog data', error.message);
    } else {
      console.warn('Unknown error fetching catalog data', error);
    }
  }
};
