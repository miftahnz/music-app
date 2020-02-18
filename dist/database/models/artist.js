"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Artist = function Artist(id, name, photo, genre) {
  (0, _classCallCheck2["default"])(this, Artist);
  this.id = id;
  this.name = name;
  this.photo = photo;
  this.genreId = genre;
};

var _default = Artist;
exports["default"] = _default;