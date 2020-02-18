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

var _customer = _interopRequireDefault(require("../db/models/customer"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

// const bcryptjs = require(bcryptjs);
var CustomerService =
/*#__PURE__*/
function () {
  function CustomerService() {
    (0, _classCallCheck2["default"])(this, CustomerService);
  }

  (0, _createClass2["default"])(CustomerService, [{
    key: "customerService",
    value: function customerService() {
      return new CustomerService();
    }
  }, {
    key: "customerRepository",
    value: function customerRepository() {
      return (0, _typeorm.getRepository)(_customer["default"]);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.customerRepository().find();
    }
  }, {
    key: "findOne",
    value: function findOne(id) {
      return this.customerRepository().findOne(id);
    }
  }, {
    key: "findByUsername",
    value: function findByUsername(username) {
      return this.customerRepository().findOne({
        username: username
      });
    } // search(payload){
    //     if (payload.username) {
    //         return this.findByUsername(payload.username);
    //     }else if(payload.name){
    //         return this.customerRepository().find({ name : Like(`%${payload.name}%`)});
    //     }else if(payload.username && payload.name){
    //         return this.customerRepository().find({ username: Like(`%${payload.name}%`) })
    //     }
    // }

  }, {
    key: "save",
    value: function () {
      var _save = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(customer) {
        var password;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                password = customer.password;
                console.log(password);
                _context.next = 4;
                return this.beforeCreate(password);

              case 4:
                customer.password = _context.sent;
                console.log(customer.password);
                return _context.abrupt("return", this.customerRepository().save(customer));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function save(_x) {
        return _save.apply(this, arguments);
      }

      return save;
    }()
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.customerRepository()["delete"](id);
    }
  }, {
    key: "update",
    value: function update(data) {
      return this.customerRepository().save(data);
    }
  }, {
    key: "beforeCreate",
    value: function () {
      var _beforeCreate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(password) {
        var salt;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                salt = _bcryptjs["default"].genSaltSync();
                _context2.next = 3;
                return _bcryptjs["default"].hashSync(password, salt);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function beforeCreate(_x2) {
        return _beforeCreate.apply(this, arguments);
      }

      return beforeCreate;
    }()
  }, {
    key: "validPassword",
    value: function () {
      var _validPassword = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(password, checkPassword) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _bcryptjs["default"].compareSync(password, checkPassword);

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function validPassword(_x3, _x4) {
        return _validPassword.apply(this, arguments);
      }

      return validPassword;
    }()
  }]);
  return CustomerService;
}();

exports["default"] = CustomerService;