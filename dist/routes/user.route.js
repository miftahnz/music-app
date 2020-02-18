"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../services/user.service"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var service = new _user["default"]();
var User = [{
  method: 'GET',
  path: '/users',
  config: {
    // auth: 'simple',
    handler: function () {
      var _handler = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(request, h) {
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
  path: '/user/{id?}',
  handler: function () {
    var _handler2 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(req, h) {
      var id, _User;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              id = req.params.id;
              _context2.next = 4;
              return service.findOne({
                id: id
              });

            case 4:
              _User = _context2.sent;
              return _context2.abrupt("return", _User);

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              throw _boom["default"].notFound(_context2.t0.message);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    function handler(_x3, _x4) {
      return _handler2.apply(this, arguments);
    }

    return handler;
  }()
}, {
  method: 'POST',
  path: '/users',
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
    }() // validate: {
    //     query: Joi.object({
    //         name: Joi.required(),
    //         username: Joi.required(),
    //         password: Joi.required()
    //     })
    // }

  }
}, {
  method: 'DELETE',
  path: '/user/{id?}',
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
  path: '/user',
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
    }()
  }
} // {
//     method: 'GET',
//     path: '/',
//     handler: function(req, h) {
//         return h.response(response.body);
//     }
// },
// {
//     method: 'GET',
//     path: '/',
//     options: {
//         auth: {
//             strategy: 'restricted'
//         }
//     },
//     handler: function(req, h) {
//         return h.view('restricted');
//     }
// },
];
var _default = User;
exports["default"] = _default;