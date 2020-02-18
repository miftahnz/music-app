"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _artist = _interopRequireDefault(require("../services/artist.service"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var service = new _artist["default"]();
var Artist = [{
  method: 'GET',
  path: '/artists',
  config: {
    // auth: 'simple',
    handler: function () {
      var _handler = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(request, h) {
        var artists;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return service.findAll();

              case 2:
                artists = _context.sent;
                return _context.abrupt("return", h.response(artists));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function handler(_x, _x2) {
        return _handler.apply(this, arguments);
      }

      return handler;
    }()
  }
}, {
  method: 'GET',
  path: '/artist/{id?}',
  config: {
    handler: function () {
      var _handler2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(request, h) {
        var id;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                id = request.params.id;
                _context2.next = 4;
                return service.findById(id);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw _boom["default"].notFound(_context2.t0.message);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function handler(_x3, _x4) {
        return _handler2.apply(this, arguments);
      }

      return handler;
    }()
  }
}, {
  method: 'GET',
  path: '/artist/genre/{genreId?}',
  config: {
    handler: function () {
      var _handler3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(request, h) {
        var genreId;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                genreId = request.params.genreId;
                _context3.next = 4;
                return service.findByGenreId({
                  genreId: genreId
                });

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                throw _boom["default"].notFound(_context3.t0.message);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function handler(_x5, _x6) {
        return _handler3.apply(this, arguments);
      }

      return handler;
    }()
  }
}, {
  method: 'POST',
  path: '/artist',
  config: {
    handler: function () {
      var _handler4 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(request, h) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return service.save(request.payload);

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 6:
                _context4.prev = 6;
                _context4.t0 = _context4["catch"](0);
                throw _boom["default"].badRequest(_context4.t0.message);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 6]]);
      }));

      function handler(_x7, _x8) {
        return _handler4.apply(this, arguments);
      }

      return handler;
    }()
  }
}, {
  method: 'PUT',
  path: '/artist/{id?}',
  config: {
    handler: function () {
      var _handler5 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, h) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return service.update(req.payload);

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                throw _boom["default"].badData;

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }));

      function handler(_x9, _x10) {
        return _handler5.apply(this, arguments);
      }

      return handler;
    }()
  }
}, {
  method: 'DELETE',
  path: '/artist/{id?}',
  config: {
    handler: function () {
      var _handler6 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(req, h) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return service["delete"](req.params.id);

              case 3:
                return _context6.abrupt("return", h.response({
                  message: "artist deleted."
                }));

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);
                throw _boom["default"].notFound(_context6.t0.message);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 6]]);
      }));

      function handler(_x11, _x12) {
        return _handler6.apply(this, arguments);
      }

      return handler;
    }()
  }
}];
var _default = Artist;
exports["default"] = _default;