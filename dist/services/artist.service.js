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

var _artist = _interopRequireDefault(require("../database/models/artist"));

var ArtistService =
/*#__PURE__*/
function () {
  function ArtistService() {
    (0, _classCallCheck2["default"])(this, ArtistService);
  }

  (0, _createClass2["default"])(ArtistService, [{
    key: "artistRepo",
    value: function artistRepo() {
      return (0, _typeorm.getRepository)(_artist["default"]);
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
                return this.artistRepo().find({
                  relations: ['genre']
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
        var artist;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.artistRepo().findOne(id);

              case 2:
                artist = _context2.sent;

                if (!artist) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", artist);

              case 7:
                throw {
                  message: 'artist not found',
                  status: 404
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
    key: "findByGenreId",
    value: function () {
      var _findByGenreId = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(_ref) {
        var genreId, artist;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                genreId = _ref.genreId;
                _context3.next = 3;
                return this.artistRepo().createQueryBuilder("artis").where("artis.genre = :id", {
                  id: genreId
                }).getMany();

              case 3:
                artist = _context3.sent;
                return _context3.abrupt("return", artist);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findByGenreId(_x2) {
        return _findByGenreId.apply(this, arguments);
      }

      return findByGenreId;
    }()
  }, {
    key: "save",
    value: function save(data) {
      var artist = this.artistRepo().save(data);
      return artist;
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(artist) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.artistRepo().save(artist);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function update(_x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var artist;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.findById(id);

              case 2:
                artist = _context5.sent;

                if (!artist) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 6;
                return this.artistRepo()["delete"](id);

              case 6:
                return _context5.abrupt("return", _context5.sent);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return ArtistService;
}();

exports["default"] = ArtistService;