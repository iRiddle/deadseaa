"use strict";

// ПОКА НЕ ИСПОЛЬЗУЕМ
var express = require('express');

var next = require('next');

var bodyParser = require('body-parser');

var WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api")["default"];

var WPAPI = require('wpapi');

var port = parseInt(process.env.PORT, 10) || 3000;
var dev = process.env.NODE_ENV !== 'production';
var app = next({
  dev: dev
});
var handle = app.getRequestHandler();
var api = new WooCommerceRestApi({
  url: 'https://kosmetika.sandev.online',
  consumerKey: 'ck_bbc22756603df50d76c39b91e851c1c2385298b3',
  consumerSecret: 'cs_ce7e0c40b0c4aeccb872bebdc0a58a823d6d3598',
  version: "wc/v3"
});
var wp = new WPAPI({
  endpoint: 'https://kosmetika.sandev.online/wp-json/'
});
app.prepare().then(function () {
  var server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({
    extended: true
  }));
  server.get('/', function (req, res) {
    return app.render(req, res, '/', req.query);
  });
  server.get('/getProducts', function _callee(req, res) {
    var data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(api.get('products').then(function (response) {
              return response.data;
            })["catch"](function (err) {
              return err;
            }));

          case 3:
            data = _context.sent;
            res.json(data);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  });
  server.get('/getCategories', function _callee2(req, res) {
    var data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(api.get("products/categories").then(function (response) {
              return response.data;
            })["catch"](function (err) {
              return err;
            }));

          case 3:
            data = _context2.sent;
            res.json(data);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  });
  server.get('/getProductsByCategory/:id', function _callee3(req, res) {
    var categoryId, data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            categoryId = req.params.id;
            _context3.next = 4;
            return regeneratorRuntime.awrap(api.get("products", {
              category: categoryId
            }).then(function (response) {
              return response.data;
            })["catch"](function (err) {
              return err;
            }));

          case 4:
            data = _context3.sent;
            res.json(data);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            throw _context3.t0;

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
  server.get('/getProducts/:id', function _callee4(req, res) {
    var productId, data;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            productId = req.params.id;
            _context4.next = 4;
            return regeneratorRuntime.awrap(api.get("products/".concat(productId)).then(function (response) {
              return response.data;
            })["catch"](function (err) {
              return err;
            }));

          case 4:
            data = _context4.sent;
            res.json(data);
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
  server.post('/registerUser', function _callee5(req, res) {
    var body, response, data;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            body = req.body;
            _context5.next = 4;
            return regeneratorRuntime.awrap(fetch('https://kosmetika.sandev.online/wp-json/wp/v2/users/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            }).then(function (response) {
              return response;
            })["catch"](function (err) {
              return err;
            }));

          case 4:
            response = _context5.sent;
            _context5.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            data = _context5.sent;
            res.json(data);
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            throw _context5.t0;

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 11]]);
  });
  server.all('*', function (req, res) {
    return handle(req, res);
  });
  server.listen(port, function (err) {
    if (err) throw err;
    console.log("> Ready on http://localhost:".concat(port));
  });
});