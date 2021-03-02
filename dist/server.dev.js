"use strict";

var express = require('express');

var next = require('next');

var WooCommerceAPI = require('woocommerce-api');

var port = parseInt(process.env.PORT, 10) || 3000;
var dev = process.env.NODE_ENV !== 'production';
var app = next({
  dev: dev
});
var handle = app.getRequestHandler();
var WooCommerce = new WooCommerceAPI({
  url: 'https://kosmetika.sandev.online/',
  consumerKey: 'ck_bbc22756603df50d76c39b91e851c1c2385298b3',
  consumerSecret: 'cs_ce7e0c40b0c4aeccb872bebdc0a58a823d6d3598',
  version: 'v3'
});
app.prepare().then(function () {
  var server = express();
  server.get('/', function (req, res) {
    return app.render(req, res, '/', req.query);
  });
  server.get('/getProducts', function (req, res) {
    WooCommerce.get('products', function (err, data, response) {
      res.json(JSON.parse(response));
    });
  });
  server.get('/getProducts/:id', function (req, res) {
    var productId = req.params.id;
    WooCommerce.get("products/".concat(productId), function (err, data, response) {
      res.json(JSON.parse(response));
    });
  });
  server.all('*', function (req, res) {
    return handle(req, res);
  });
  server.listen(port, function (err) {
    if (err) throw err;
    console.log("> Ready on http://localhost:".concat(port));
  });
});