import axios from 'axios';

const NOVA_POSHTA_API_URL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = process.env.NOVA_POSHTA_API_KEY;

// отримання списку міст
export async function getCities() {
  const response = await axios.post(NOVA_POSHTA_API_URL, {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getCities',
    methodProperties: {
      FindByString: 'Львів',
    },
  });

  return response.data.data;
}

//  отримання списку відділень для міста
export async function getWarehouses({ cityRef }: any) {
  const response = await axios.post(NOVA_POSHTA_API_URL, {
    apiKey: API_KEY,
    modelName: 'AddressGeneral',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityRef: cityRef,
    },
  });

  return response.data.data;
}

//  отримання списку вулиць для міста
export async function getStreets({ cityRef }: any) {
  const response = await axios.post(NOVA_POSHTA_API_URL, {
    apiKey: API_KEY,
    modelName: 'AddressGeneral',
    calledMethod: 'getStreet',
    methodProperties: {
      CityRef: cityRef,
    },
    Page: '1',
  });

  return response.data.data;
}
