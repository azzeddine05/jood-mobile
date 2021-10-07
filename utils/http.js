import axios from "axios";

const preprod = 'https://api.hotellom.com'

const http = axios.create({
    baseURL: `${preprod}`,
    responseType: 'json',
})

export default http