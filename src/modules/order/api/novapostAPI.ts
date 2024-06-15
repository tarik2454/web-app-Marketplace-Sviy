import axios from 'axios';

const NOVA_POSHTA_API_URL = 'https://api.novaposhta.ua/v2.0/json/';
const API_KEY = process.env.NOVA_POSHTA_API_KEY;

// Функція для отримання списку міст
export async function getCities() {
  const response = await axios.post(NOVA_POSHTA_API_URL, {
    apiKey: API_KEY,
    modelName: 'Address',
    calledMethod: 'getCities',
  });

  return response.data.data;
}

// Функція для отримання списку відділень для конкретного міста
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
