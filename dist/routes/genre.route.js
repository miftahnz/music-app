"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _genre = _interopRequireDefault(require("../services/genre.service"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var service = new _genre["default"]();
var Genre = [{
  method: 'GET',
  path: '/genres',
  config: {
    handler: function () {
      var _handler = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, h) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return service.findAll();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
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
  path: '/genre/{id?}',
  config: {
    handler: function () {
      var _handler2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, h) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return service.findById(req.params.id);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _boom["default"].notFound(_context2.t0.message);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function handler(_x3, _x4) {
        return _handler2.apply(this, arguments);
      }

      return handler;
    }()
  }
}, {
  method: 'POST',
  path: '/genre',
  config: {
    handler: function () {
      var _handler3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, h) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return service.save(req.payload);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function handler(_x5, _x6) {
        return _handler3.apply(this, arguments);
      }

      return handler;
    }()
  }
}, {
  method: 'PUT',
  path: '/genre',
  config: {
    handler: function () {
      var _handler4 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, h) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return service.update(req.payload);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function handler(_x7, _x8) {
        return _handler4.apply(this, arguments);
      }

      return handler;
    }()
  }
}, {
  method: 'DELETE',
  path: '/genre/{id?}',
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
                return service["delete"](req.params.id);

              case 3:
                return _context5.abrupt("return", h.response({
                  message: "genre deleted."
                }));

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                throw _boom["default"].notFound(_context5.t0.message);

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
}];
var _default = Genre;
exports["default"] = _default;