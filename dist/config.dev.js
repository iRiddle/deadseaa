"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEnvironment = exports.config = void 0;
var config = {
  devUrl: 'http://localhost:3000',
  prodUrl: 'https://deadseaa.vercel.app'
};
exports.config = config;

var getEnvironment = function getEnvironment() {
  if (process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return config.devUrl;
  }

  return config.prodUrl;
};

exports.getEnvironment = getEnvironment;