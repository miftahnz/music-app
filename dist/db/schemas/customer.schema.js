"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _customer = _interopRequireDefault(require("../models/customer"));

var CustomerSchema = new _typeorm.EntitySchema({
  name: 'Customer',
  target: _customer["default"],
  tableName: 'customers',
  columns: {
    id: {
      type: 'int',
      generated: true,
      nullable: false,
      primary: true
    },
    name: {
      type: 'varchar',
      length: 100,
      nullable: false
    },
    address: {
      type: 'varchar',
      length: 100,
      nullable: false
    },
    handphone: {
      type: 'varchar',
      length: 100,
      nullable: false
    },
    username: {
      type: 'varchar',
      length: 100,
      nullable: false
    },
    password: {
      type: 'varchar',
      length: 255,
      nullable: false
    }
  }
});
var _default = CustomerSchema;
exports["default"] = _default;