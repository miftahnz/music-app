"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Song = function Song(id, title, duration, artist) {
  (0, _classCallCheck2["default"])(this, Song);
  this.id = id;
  this.title = title;
  this.duration = duration;
  this.artist = artist;
};

var _default = Song;
exports["default"] = _default;