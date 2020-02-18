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

var _user = _interopRequireDefault(require("../database/models/user"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var UserService =
/*#__PURE__*/
function () {
  function UserService() {
    (0, _classCallCheck2["default"])(this, UserService);
  }

  (0, _createClass2["default"])(UserService, [{
    key: "UserRepository",
    value: function UserRepository() {
      return (0, _typeorm.getRepository)(_user["default"]);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.UserRepository().find();
    }
  }, {
    key: "findOne",
    value: function () {
      var _findOne = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(id) {
        var data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.UserRepository().findOne(id);

              case 2:
                data = _context.sent;

                if (!data) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", data);

              case 7:
                throw {
                  message: 'user not found'
                };

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function findOne(_x) {
        return _findOne.apply(this, arguments);
      }

      return findOne;
    }()
  }, {
    key: "findByUsername",
    value: function findByUsername(username) {
      return this.UserRepository().findOne({
        username: username
      });
    }
  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(User) {
        var password;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                password = User.password;
                console.log(password);
                _context2.next = 4;
                return this.beforeCreate(password);

              case 4:
                User.password = _context2.sent;
                console.log(User.password);
                return _context2.abrupt("return", this.UserRepository().save(User));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function save(_x2) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "delete",
    value: function _delete(id) {
      var data = this.findOne(id);

      if (data) {
        return this.UserRepository()["delete"](id);
      }
    }
  }, {
    key: "update",
    value: function update(data) {
      return this.UserRepository().save(data);
    }
  }, {
    key: "beforeCreate",
    value: function () {
      var _beforeCreate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(password) {
        var salt;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                salt = _bcryptjs["default"].genSaltSync();
                _context3.next = 3;
                return _bcryptjs["default"].hashSync(password, salt);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function beforeCreate(_x3) {
        return _beforeCreate.apply(this, arguments);
      }

      return beforeCreate;
    }()
  }, {
    key: "validPassword",
    value: function () {
      var _validPassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(password, checkPassword) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _bcryptjs["default"].compareSync(password, checkPassword);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function validPassword(_x4, _x5) {
        return _validPassword.apply(this, arguments);
      }

      return validPassword;
    }()
  }]);
  return UserService;
}();

exports["default"] = UserService;