// "json", "xml", "piped" ou "querty".
// https://viacep.com.br/ws/01001000/json/
// https://viacep.com.br/ws/01001000/xml/
// https://viacep.com.br/ws/01001000/piped/
// https://viacep.com.br/ws/01001000/querty/

// export default class ZipCod {

//   constructor(options) {
//     this.type = options.type || 'json';
//   }
// }
import { expect } from 'chai';
import ViaCep from '../src';

describe('zipCod', () => {

  it('should create an instance of ViaCep', () => {
    const viacep = new ViaCep();
    expect(viacep).to.be.an.instanceOf(ViaCep);
  });

  describe('smoke tests', () => {
    it('should zipcode method is exist', () => {
      const viacep = new ViaCep();
      expect(viacep.zipCod).to.be.exist;
    });

    it('should getJson method exist', () => {
      const viacep = new ViaCep();
      expect(viacep.zipCod.getJson).to.be.exist;
    });

    it('should getXml method exist', () => {
      const viacep = new ViaCep();
      expect(viacep.zipCod.getXml).to.be.exist;
    });

    it('should getPiped method exist', () => {
      const viacep = new ViaCep();
      expect(viacep.zipCod.getPiped).to.be.exist;
    });

    it('should getQuerty method exist', () => {
      const viacep = new ViaCep();
      expect(viacep.zipCod.getQuerty).to.be.exist;
    });
  });
});
