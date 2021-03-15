// ПОКА НЕ ИСПОЛЬЗУЕМ

const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const WPAPI = require('wpapi');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

const api = new WooCommerceRestApi({
    url: 'https://kosmetika.sandev.online',
    consumerKey: 'ck_bbc22756603df50d76c39b91e851c1c2385298b3',
    consumerSecret: 'cs_ce7e0c40b0c4aeccb872bebdc0a58a823d6d3598',
    version: "wc/v3"
});

const wp = new WPAPI({ endpoint: 'https://kosmetika.sandev.online/wp-json/' });

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: true }))

    server.get('/', (req, res) => {
        return app.render(req, res, '/', req.query)
    })

    server.get('/getProducts', async (req, res) => {
        try {
            const data = await api.get('products').then(response => response.data).catch(err => err)
            res.json(data)
        } catch (e) {
            throw e
        }
    })

    server.get('/getCategories', async (req, res) => {
        try {
            const data = await api.get(`products/categories`).then(response => response.data).catch(err => err)
            res.json(data)
        } catch (e) {
            throw e
        }
    })

    server.get('/getProductsByCategory/:id', async (req, res) => {
        try {
            const categoryId = req.params.id
            const data = await api.get(`products`, { category: categoryId }).then(response => response.data).catch(err => err)
            res.json(data)
        } catch (e) {
            throw e
        }
    })

    server.get('/getProducts/:id', async (req, res) => {
        try {
            const productId = req.params.id
            const data = await api.get(`products/${productId}`).then(response => response.data).catch(err => err)
            res.json(data)
        } catch (e) {
            throw e
        }
    })

    server.post('/registerUser', async (req, res) => {
        try {
            const body = req.body
            const response = await fetch('https://kosmetika.sandev.online/wp-json/wp/v2/users/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }).then(response => response).catch(err => err);
            const data = await response.json()
            res.json(data)
        } catch (e) {
            throw e
        }
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})