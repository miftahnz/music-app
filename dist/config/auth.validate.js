"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../services/user.service"));

var validate =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(request, username, password) {
    var user, isValid, credentials;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new _user["default"]().findByUsername(username);

          case 2:
            user = _context.sent;

            if (user) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {
              credentials: null,
              isValid: false
            });

          case 5:
            _context.next = 7;
            return new _user["default"]().validPassword(password, user.password);

          case 7:
            isValid = _context.sent;
            credentials = {
              id: user.id,
              name: user.name
            };
            return _context.abrupt("return", {
              isValid: isValid,
              credentials: credentials
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function validate(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = validate;
exports["default"] = _default;