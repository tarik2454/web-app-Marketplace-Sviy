import { APIEXTRA } from './global-config-api';

export const fetchCatalog = async () => {
  try {
    const data = await APIEXTRA.get('/api/catalog/category/');
    return data.data.results;
  } catch (error) {
    console.log('Error fetching catalog data:', error);
  }
};
