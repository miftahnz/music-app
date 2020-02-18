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

var _customer = _interopRequireDefault(require("../../db/models/customer"));

var _customer2 = _interopRequireDefault(require("../../services/customer.service"));

var customerService = new _customer2["default"]();

var Boom = require('@hapi/boom');

var LoginService =
/*#__PURE__*/
function () {
  function LoginService() {
    (0, _classCallCheck2["default"])(this, LoginService);
  }

  (0, _createClass2["default"])(LoginService, [{
    key: "customerRepo",
    value: function customerRepo() {
      return (0, _typeorm.getRepository)(_customer["default"]);
    }
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(form) {
        var username, password, cust;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = form.username, password = form.password;
                _context.next = 3;
                return customerService.findByUsername(username);

              case 3:
                cust = _context.sent;
                _context.t0 = cust;

                if (!_context.t0) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return customerService.validPassword(password, user.password);

              case 8:
                _context.t0 = _context.sent;

              case 9:
                if (!_context.t0) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("return", cust);

              case 13:
                throw Boom.unauthorized('invalid login credentials');

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);
  return LoginService;
}();

exports["default"] = LoginService;