"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _song = _interopRequireDefault(require("../models/song"));

var SongSchema = new _typeorm.EntitySchema({
  name: 'Song',
  target: _song["default"],
  tableName: 'songs',
  columns: {
    id: {
      type: 'int',
      generated: true,
      primary: true
    },
    title: {
      type: 'varchar',
      length: 100,
      nullable: false
    },
    duration: {
      type: 'time',
      nullable: false
    }
  },
  relations: {
    artist: {
      target: 'Artist',
      type: 'many-to-one',
      joinColumn: true
    }
  }
});
var _default = SongSchema;
exports["default"] = _default;