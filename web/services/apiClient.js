import axios from "axios";


const client = axios.create({
    baseURL: 'http://web-susapi.palmdoctor.dev.br/api',
    timeout: 5000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})

export const api = (method, url, body, customConfig) => {

    if (customConfig) {
        const request = {
            method: method,
            url: url,
            data: body,
            ...customConfig
        }
        console.log('request: ', request)
        return client(request)
    } else if (!body) {
        return client[method](url)
    } else {
        return client[method](url, body)
    }
}