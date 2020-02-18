"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Customer = function Customer(id, name, address, handphone, username, password) {
  (0, _classCallCheck2["default"])(this, Customer);
  this.id = id;
  this.name = name;
  this.address = address;
  this.handphone = handphone;
  this.username = username;
  this.password = password;
};

var _default = Customer;
exports["default"] = _default;