import { API } from './global-config-api';

export const fetchCatalog = async () => {
  try {
    const response = await fetch('http://16.170.219.150/api/catalog/category/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log('Error fetching catalog data:', error);
    throw error;
  }
};
