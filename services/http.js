import config from '../config'

class Http {
    static apiUrl = config.apiUrl

    static request(url, method = 'GET', body, headers) {
        return fetch(Http.apiUrl + url, {
            method,
            ...(body && { body: JSON.stringify(body) }),
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
        })
    }
}

export default Http