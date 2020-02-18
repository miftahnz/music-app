"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.route"));

var _artist = _interopRequireDefault(require("./artist.route"));

var _genre = _interopRequireDefault(require("./genre.route"));

var _song = _interopRequireDefault(require("./song.route"));

var routes = [].concat(_user["default"], _artist["default"], _genre["default"], _song["default"]);
var _default = routes;
exports["default"] = _default;