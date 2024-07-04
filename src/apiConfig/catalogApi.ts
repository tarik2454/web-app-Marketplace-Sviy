import { API } from './globalConfig';

export const fetchCatalog = async () => {
  try {
    const response = await API.get('/api/account/user/register/');
    const data = response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};
