import axios from 'axios'

const baseURL = process.env.ENDPOINT_URL
console.log(baseURL)
export const api = axios.create({
    baseURL
    // timeout: 1000,
});