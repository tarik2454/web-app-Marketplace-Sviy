<<<<<<< HEAD
import axios from 'axios';
import { APIEXTRA } from './global-config-api';
=======
import { API } from './global-config-api';
>>>>>>> dev

export const fetchCatalog = async () => {
  try {
    const response = await API.get('/api/catalog/category/');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.warn('Axios error fetching catalog data', error.message);
    } else {
      console.warn('Unknown error fetching catalog data', error);
    }
  }
};
