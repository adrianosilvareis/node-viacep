function searchZip(type, ...address) {
  return this.request(`${this.apiURL}/${address.join('/')}/${type}/`);
}

export default function address() {
  return {
    getJson: searchZip.bind(this, 'json'),
    getXml: searchZip.bind(this, 'xml'),
  };
}
