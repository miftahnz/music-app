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

var _user = _interopRequireDefault(require("../services/user.service"));

var _user2 = _interopRequireDefault(require("../database/models/user"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var Service = new _user["default"]();

var ServiceAuth =
/*#__PURE__*/
function () {
  function ServiceAuth() {
    (0, _classCallCheck2["default"])(this, ServiceAuth);
  }

  (0, _createClass2["default"])(ServiceAuth, [{
    key: "userRepo",
    value: function userRepo() {
      return (0, _typeorm.getRepository)(_user2["default"]);
    }
  }, {
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, username, password) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Service.findByUsername(username);

              case 2:
                user = _context.sent;

                if (user) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", {
                  valid: false
                });

              case 5:
                return _context.abrupt("return", {
                  valid: true,
                  credential: user
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function validate(_x, _x2, _x3) {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(form) {
        var username, password, user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                username = form.username, password = form.password;
                _context2.next = 3;
                return Service.findByUsername(username);

              case 3:
                user = _context2.sent;
                _context2.t0 = user;

                if (!_context2.t0) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 8;
                return Service.validPassword(password, user.password);

              case 8:
                _context2.t0 = _context2.sent;

              case 9:
                if (!_context2.t0) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", user);

              case 13:
                throw _boom["default"].unauthorized('invalid login credentials');

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function login(_x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }]);
  return ServiceAuth;
}();

exports["default"] = ServiceAuth;