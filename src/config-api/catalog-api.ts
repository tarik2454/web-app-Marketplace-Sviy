import { API } from './global-config-api';

export const fetchCatalog = async () => {
  try {
    const response = await API.get(
      'http://16.170.219.150/api/catalog/category/'
    );
    return response.data.results;
  } catch (error) {
    console.log('Error fetching catalog data:', error);
    throw error;
  }
};
