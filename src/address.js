function searchZip(type, ...url) {
  return this.request(`${this.apiURL}/${url.join('/')}/${type}/`);
}

export default function address() {
  return {
    getZip: searchZip.bind(this, this.type),
    getJson: searchZip.bind(this, 'json'),
    getXml: searchZip.bind(this, 'xml'),
  };
}
