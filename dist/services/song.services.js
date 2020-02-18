"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var _song = _interopRequireDefault(require("../database/models/song"));

var SongService =
/*#__PURE__*/
function () {
  function SongService() {
    (0, _classCallCheck2["default"])(this, SongService);
  }

  (0, _createClass2["default"])(SongService, [{
    key: "songRepo",
    value: function songRepo() {
      return (0, _typeorm.getRepository)(_song["default"]);
    }
  }, {
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.songRepo().find({
                  relations: ['artist']
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findAll() {
        return _findAll.apply(this, arguments);
      }

      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        var song;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.songRepo().findOne(id);

              case 2:
                song = _context2.sent;

                if (!song) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", song);

              case 7:
                throw {
                  message: "song with id ".concat(id, " not found")
                };

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function findById(_x) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "findByArtistId",
    value: function () {
      var _findByArtistId = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(_ref) {
        var artistId, song;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                artistId = _ref.artistId;
                _context3.next = 3;
                return this.songRepo().createQueryBuilder("music").where("music.artist = :id", {
                  id: artistId
                }).getMany();

              case 3:
                song = _context3.sent;
                return _context3.abrupt("return", song);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findByArtistId(_x2) {
        return _findByArtistId.apply(this, arguments);
      }

      return findByArtistId;
    }()
  }, {
    key: "save",
    value: function save(data) {
      return this.songRepo().save(data);
    }
  }, {
    key: "update",
    value: function update(data) {
      return this.songRepo().save(data);
    }
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(id) {
        var song;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.findById(id);

              case 2:
                song = _context4.sent;
                return _context4.abrupt("return", this.songRepo()["delete"](song.id));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _delete(_x3) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return SongService;
}();

exports["default"] = SongService;