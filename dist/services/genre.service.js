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

var _genre = _interopRequireDefault(require("../database/models/genre"));

var GenreService =
/*#__PURE__*/
function () {
  function GenreService() {
    (0, _classCallCheck2["default"])(this, GenreService);
  }

  (0, _createClass2["default"])(GenreService, [{
    key: "genreRepo",
    value: function genreRepo() {
      return (0, _typeorm.getRepository)(_genre["default"]);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.genreRepo().find();
    }
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(id) {
        var genre;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.genreRepo().findOne(id);

              case 2:
                genre = _context.sent;

                if (!genre) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", genre);

              case 7:
                throw {
                  message: "genre with id ".concat(id, " not found")
                };

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findById(_x) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }, {
    key: "save",
    value: function save(data) {
      return this.genreRepo().save(data);
    }
  }, {
    key: "update",
    value: function update(data) {
      return this.genreRepo().save(data);
    }
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(id) {
        var genre;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.findById(id);

              case 2:
                genre = _context2.sent;

                if (!genre) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return this.genreRepo()["delete"](id);

              case 6:
                return _context2.abrupt("return", _context2.sent);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _delete(_x2) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return GenreService;
}();

exports["default"] = GenreService;