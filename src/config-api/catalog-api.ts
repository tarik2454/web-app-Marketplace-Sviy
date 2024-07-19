import { API } from './global-config-api';

export const fetchCatalog = async () => {
  try {
    const response = await API.get('/api/catalog/category/');
    return response.data;
  } catch (error) {
    console.log('Error fetching catalog data:', error);
  }
};
