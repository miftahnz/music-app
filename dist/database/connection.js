"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeorm = require("typeorm");

var _entities = _interopRequireDefault(require("./entities"));

var createConnection =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var connection;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _typeorm.createConnection)({
              type: process.env.DB_DRIVER,
              host: process.env.DB_HOST,
              username: process.env.DB_USERNAME,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_NAME,
              synchronize: process.env.DB_SYNC,
              logging: process.env.DB_LOGGING,
              entities: _entities["default"]
            });

          case 2:
            connection = _context.sent;
            return _context.abrupt("return", connection);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createConnection() {
    return _ref.apply(this, arguments);
  };
}();

var _default = createConnection;
exports["default"] = _default;