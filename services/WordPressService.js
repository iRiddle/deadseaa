import { API_URL } from '../constants'

const WPAPI = require('wpapi');
const WordPressApi = new WPAPI({ endpoint: API_URL });

export const WordPressCustomApi = (endpoint, method = 'GET', body, headers = {}) => {
    return fetch(`${API_URL}/wp-json${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        method,
        ...(body && { body: JSON.stringify(body) }),
    })
        .then((res) => {
            return res.json();
        })

        .then((res) => {
            return {
                code: res.code,
                data: res.data,
                message: res.message
            }

        })
        .catch(err => err)
}

export default WordPressApi