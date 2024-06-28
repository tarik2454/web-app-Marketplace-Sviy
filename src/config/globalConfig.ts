import axios, { AxiosInstance } from 'axios';

// Define a type for  API
export const API: AxiosInstance = axios.create({
  baseURL: 'http://ec2-13-51-150-87.eu-north-1.compute.amazonaws.com',
});

// `token` parameter is typed as a string
export const setToken = (token: string): void => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Clear token function does not need a type for the parameter as it doesn't have any.
export const clearToken = (): void => {
  API.defaults.headers.common['Authorization'] = '';
};
