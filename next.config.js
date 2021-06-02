module.exports = {
    images: {
        domains: ['back.philosophysea.ru', 'secure.gravatar.com'],
    },
    async rewrites() {
        return [
            {
                source: '/catalog/([a-zA-Z]*)',
                destination: '/catalog?page=1', // Matched parameters can be used in the destination
            },
        ]
    },
}