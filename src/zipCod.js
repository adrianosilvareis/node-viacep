function searchCod(type, cep) {
  return this.request(`${this.apiURL}/${cep}/${type}/`);
}

export default function zipCod() {
  return {
    getZip: searchCod.bind(this, this.type),
    getJson: searchCod.bind(this, 'json'),
    getXml: searchCod.bind(this, 'xml'),
    getPiped: searchCod.bind(this, 'piped'),
    getQuerty: searchCod.bind(this, 'querty'),
  };
}
