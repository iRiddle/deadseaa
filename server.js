const express = require('express')
const next = require('next')
const WooCommerceAPI = require('woocommerce-api');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

const WooCommerce = new WooCommerceAPI({
    url: 'https://kosmetika.sandev.online/',
    consumerKey: 'ck_bbc22756603df50d76c39b91e851c1c2385298b3',
    consumerSecret: 'cs_ce7e0c40b0c4aeccb872bebdc0a58a823d6d3598',
    version: 'v3'
});


app.prepare().then(() => {
    const server = express()

    server.get('/', (req, res) => {
        return app.render(req, res, '/', req.query)
    })

    server.get('/getProducts', (req, res) => {
        WooCommerce.get('products', function (err, data, response) {
            res.json(JSON.parse(response))
        })
    })

    server.get('/getProducts/:id', (req, res) => {
        const productId = req.params.id
        WooCommerce.get(`products/${productId}`, function (err, data, response) {
            res.json(JSON.parse(response))
        })
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})