"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var WPAPI = require('wpapi');

var WordPressApi = new WPAPI({
  endpoint: 'http://kosmetika.sandev.online/wp-json'
});
var _default = WordPressApi;
exports["default"] = _default;