"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _storage = require("../storage");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fabricStorage = function fabricStorage(createNotification) {
  var setToStorage = function setToStorage(product) {
    var mappedData = [];
    var dataFromStorage = getProductsFromStorage();
    var isExistInStorage = findProduct(dataFromStorage, product);

    if (isExistInStorage) {
      mappedData = dataFromStorage.map(function (item) {
        return item.id === product.id ? _objectSpread({}, item, {
          count: item.count + product.count
        }) : item;
      });
    } else {
      mappedData = [].concat(_toConsumableArray(dataFromStorage), [product]);
    }

    (0, _storage.setDataToLocal)('phylosophyProducts', mappedData);
    createNotification('ok', 'Товары успешно добавлены в корзину');
  };

  var getProductsFromStorage = function getProductsFromStorage() {
    return (0, _storage.getDataFromLocal)('phylosophyProducts') || [];
  };

  var findProduct = function findProduct(data, product) {
    return data.find(function (elem) {
      return elem.id === product.id;
    });
  };

  return {
    setToStorage: setToStorage
  };
};

var _default = fabricStorage;
exports["default"] = _default;