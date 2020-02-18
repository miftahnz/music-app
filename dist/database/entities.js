"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./schemas/user.schema"));

var _artist = _interopRequireDefault(require("./schemas/artist.schema"));

var _song = _interopRequireDefault(require("./schemas/song.schema"));

var _genre = _interopRequireDefault(require("./schemas/genre.schema"));

var _default = [_user["default"], _artist["default"], _song["default"], _genre["default"]];
exports["default"] = _default;