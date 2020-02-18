"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../models/User"));

var UserSchema = new _typeorm.EntitySchema({
  name: 'User',
  target: _User["default"],
  tableName: 'users',
  columns: {
    id: {
      type: 'int',
      generated: true,
      nullable: false,
      primary: true
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
var _default = UserSchema;
exports["default"] = _default;