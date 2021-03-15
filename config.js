
export const config = {
    devUrl: 'http://localhost:3000',
    prodUrl: 'https://deadseaa.vercel.app'
}

export const getEnvironment = () => {
    if (process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return config.devUrl
    }
    return config.prodUrl
}