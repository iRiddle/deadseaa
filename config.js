
export const config = {
    devUrl: 'http://localhost:3000',
    prodUrl: 'https://deadseaa.vercel.app'
}

export const apiEmailConfig = {
    USER_ID: "user_fmW6dnSdyQtVMGGNFKfh4",
    TEMPLATE_ID: "template_t9999lg",
    SERVICE_ID: "phylosophy_sea_id"
}

export const getEnvironment = () => {
    if (process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return config.devUrl
    }
    return config.prodUrl
}