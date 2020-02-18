"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _customer = _interopRequireDefault(require("../../services/customer.service"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var service = new _customer["default"]();
var customer = [{
  method: 'GET',
  path: '/customers',
  config: {
    auth: 'simple',
    handler: function () {
      var _handler = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(request, h) {
        var customers;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return service.findAll();

              case 2:
                customers = _context.sent;
                return _context.abrupt("return", h.response({
                  customers: customers
                }));

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
  path: '/customer/{id?}',
  handler: function () {
    var _handler2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, h) {
      var id, customer;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = req.params.id;
              _context2.next = 3;
              return service.findOne({
                id: id
              });

            case 3:
              customer = _context2.sent;

              if (customer) {
                _context2.next = 8;
                break;
              }

              throw _boom["default"].notFound('customer not found');

            case 8:
              return _context2.abrupt("return", customer);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function handler(_x3, _x4) {
      return _handler2.apply(this, arguments);
    }

    return handler;
  }()
}, {
  method: 'POST',
  path: '/customers',
  config: {
    handler: function () {
      var _handler3 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, h) {
        var data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return service.save(req.payload);

              case 2:
                data = _context3.sent;
                return _context3.abrupt("return", h.response({
                  data: data
                }).code(201));

              case 4:
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
    }(),
    validate: {
      query: _joi["default"].object({
        name: _joi["default"].required(),
        username: _joi["default"].required(),
        password: _joi["default"].required(),
        address: _joi["default"].required()
      })
    }
  }
}, {
  method: 'DELETE',
  path: '/customer/{id?}',
  handler: function () {
    var _handler4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4(req, h) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return service["delete"](req.params.id);

            case 2:
              return _context4.abrupt("return", h.response().code(204));

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
}, {
  method: 'PUT',
  path: '/customer/',
  config: {
    handler: function () {
      var _handler5 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, h) {
        var cust, data;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cust = req.payload;
                _context5.next = 3;
                return service.update(cust);

              case 3:
                data = _context5.sent;
                return _context5.abrupt("return", h.response({
                  data: data
                }));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function handler(_x9, _x10) {
        return _handler5.apply(this, arguments);
      }

      return handler;
    }(),
    validate: {
      query: _joi["default"].object({
        id: _joi["default"].number().integer().min(1).required()
      })
    }
  }
}];
var _default = customer;
exports["default"] = _default;