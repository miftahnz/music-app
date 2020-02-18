"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeorm = require("typeorm");

var _artist = _interopRequireDefault(require("../models/artist"));

var ArtistSchema = new _typeorm.EntitySchema({
  name: 'Artist',
  target: _artist["default"],
  tableName: 'artists',
  columns: {
    id: {
      type: 'int',
      generated: true,
      primary: true,
      generationStrategy: "increment"
    },
    name: {
      type: 'varchar',
      length: 100
    },
    photo: {
      type: 'varchar',
      length: 255,
      nullable: false
    }
  },
  relations: {
    genre: {
      target: 'Genre',
      type: 'many-to-one',
      joinColumn: true
    },
    artists: {
      target: 'Song',
      type: 'one-to-many',
      inverseSide: 'artist',
      cascade: true,
      joinColumn: true
    }
  }
});
var _default = ArtistSchema;
exports["default"] = _default;