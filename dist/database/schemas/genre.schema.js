"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _genre = _interopRequireDefault(require("../models/genre"));

var GenreSchema = new _typeorm.EntitySchema({
  name: 'Genre',
  target: _genre["default"],
  tableName: 'genres',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true
    },
    genre: {
      type: 'varchar',
      nullable: false,
      length: 100
    },
    images: {
      type: 'varchar',
      nullable: false,
      length: 255
    }
  },
  relations: {
    artists: {
      target: 'Artist',
      type: 'one-to-many',
      inverseSide: 'genre',
      joinColumn: true,
      cascade: true
    }
  }
});
var _default = GenreSchema;
exports["default"] = _default;