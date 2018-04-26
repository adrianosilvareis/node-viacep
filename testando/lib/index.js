'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global fetch */

var _zipCod = require('./zipCod');

var _zipCod2 = _interopRequireDefault(_zipCod);

var _address = require('./address');

var _address2 = _interopRequireDefault(_address);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViaCep = function () {
  function ViaCep(options) {
    _classCallCheck(this, ViaCep);

    this.apiURL = options.apiURL || _config.API_URL;
    this.type = options.type || 'json';

    this.zipCod = _zipCod2.default.bind(this)();
    this.address = _address2.default.bind(this)();
  }

  _createClass(ViaCep, [{
    key: 'request',
    value: function request(url) {
      this.url = url;

      return fetch(url);
    }
  }]);

  return ViaCep;
}();

exports.default = ViaCep;