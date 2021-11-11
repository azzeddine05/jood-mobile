import axios from "axios";

const preprod = 'https://jood-api.herokuapp.com/api'

const http = axios.create({
    baseURL: `${preprod}`,
    responseType: 'json',
})

export default http
