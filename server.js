const express = require('express')
const next = require('next')
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

const api = new WooCommerceRestApi({
    url: "https://kosmetika.sandev.online/",
    consumerKey: "ck_bbc22756603df50d76c39b91e851c1c2385298b3",
    consumerSecret: "cs_ce7e0c40b0c4aeccb872bebdc0a58a823d6d3598",
    version: "wc/v3"
});

app.prepare().then(() => {
    const server = express()

    server.get('/', (req, res) => {
        return app.render(req, res, '/', req.query)
    })

    server.get('/getProducts', (req, res) => {
        const data = api.get("products")
            .then((response) => response.data)
        return app.render(req, data, '/catalog', req.query)
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})