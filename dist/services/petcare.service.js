"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var _petcare = _interopRequireDefault(require("../db/models/petcare"));

var PetcareService =
/*#__PURE__*/
function () {
  function PetcareService() {
    (0, _classCallCheck2["default"])(this, PetcareService);
  }

  (0, _createClass2["default"])(PetcareService, [{
    key: "petcareRepo",
    value: function petcareRepo() {
      return (0, _typeorm.getRepository)(_petcare["default"]);
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.petcareRepo().find();
    }
  }, {
    key: "findOne",
    value: function findOne(id) {
      return this.petcareRepo().findOne(id);
    }
  }, {
    key: "save",
    value: function save(PetCare) {
      return this.petcareRepo().save(PetCare);
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.petcareRepo()["delete"](id);
    }
  }, {
    key: "update",
    value: function update(data) {
      return this.petcareRepo().save(data);
    }
  }]);
  return PetcareService;
}();

exports["default"] = PetcareService;