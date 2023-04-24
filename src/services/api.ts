import axios from 'axios';

const baseURL = process.env.ENDPOINT_URL;

export const api = axios.create({
  baseURL,
});
