'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = zipCod;
function searchCod(type, cep) {
  return this.request(this.apiURL + '/' + cep + '/' + type + '/');
}

function zipCod() {
  return {
    getZip: searchCod.bind(this, this.type),
    getJson: searchCod.bind(this, 'json'),
    getXml: searchCod.bind(this, 'xml'),
    getPiped: searchCod.bind(this, 'piped'),
    getQuerty: searchCod.bind(this, 'querty')
  };
}