'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = address;
function searchZip(type) {
  for (var _len = arguments.length, url = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    url[_key - 1] = arguments[_key];
  }

  return this.request(this.apiURL + '/' + url.join('/') + '/' + type + '/');
}

function address() {
  return {
    getZip: searchZip.bind(this, this.type),
    getJson: searchZip.bind(this, 'json'),
    getXml: searchZip.bind(this, 'xml')
  };
}