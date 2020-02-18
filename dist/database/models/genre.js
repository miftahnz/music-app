"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Genre = function Genre(id, genre, images) {
  (0, _classCallCheck2["default"])(this, Genre);
  this.id = id;
  this.genre = genre;
  this.images = images;
};

var _default = Genre;
exports["default"] = _default;