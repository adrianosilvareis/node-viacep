import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import ViaCep from "../src";

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('address', () => {
  let viacep;
  let stubedFetch;
  let promise;

  const retorno = [{
      "cep": "99945-000",
      "logradouro": "",
      "complemento": "",
      "bairro": "",
      "localidade": "Vitória (Ibiaçá)",
      "uf": "RS",
      "unidade": "",
      "ibge": "4309803",
      "gia": ""
    },    {
      "cep": "98850-000",
      "logradouro": "",
      "complemento": "",
      "bairro": "",
      "localidade": "Vitória das Missões",
      "uf": "RS",
      "unidade": "",
      "ibge": "4323754",
      "gia": ""
    }
  ];

  beforeEach(() => {
    viacep = new ViaCep({});

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should address method is exist', () => {
      expect(viacep.address).to.exist;
    });

    it('should getZip method in address is exist', () => {
      expect(viacep.address.getZip).to.exist;
    });

    it('should getJson method in address is exist', () => {
      expect(viacep.address.getJson).to.exist;
    });

    it('should getXml method in address is exist', () => {
      expect(viacep.address.getXml).to.exist;
    });
  });

  describe('getZip', () => {
    let viacepZipTest;

    beforeEach(() => {
      viacepZipTest = new ViaCep({
        type: 'xml'
      });
    });

    it('should call fetch method', () => {
      viacepZipTest.address.getZip();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch the correct URL', () => {
      viacepZipTest.address
      .getZip('RS', 'vitoria', 'adalberto')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/RS/vitoria/adalberto/xml/');

      viacepZipTest.address
      .getZip('uf', 'city', 'street')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/uf/city/street/xml/');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves(retorno);
      const zipcods = viacepZipTest.address.getZip('es', 'vitoria', 'adalberto');
      expect(zipcods.resolveValue).to.be.eql(retorno);
    });

  });

  describe('getJson', () => {
    it('should call fetch method', () => {
      viacep.address.getJson();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch the correct URL', () => {
      viacep.address
      .getJson('RS', 'vitoria', 'adalberto')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/RS/vitoria/adalberto/json/');

      viacep.address
      .getJson('uf', 'city', 'street')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/uf/city/street/json/');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves(retorno);
      const zipcods = viacep.address.getJson('es', 'vitoria', 'adalberto');
      expect(zipcods.resolveValue).to.be.eql(retorno);
    });

  });

  describe('getXml', () => {
    it('should call fetch method', () => {
      viacep.address.getXml();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch the correct URL', () => {
      viacep.address
      .getXml('RS', 'vitoria', 'adalberto')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/RS/vitoria/adalberto/xml/');

      viacep.address
      .getXml('uf', 'city', 'street')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/uf/city/street/xml/');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves(retorno);
      const zipcods = viacep.address.getXml('es', 'vitoria', 'adalberto');
      expect(zipcods.resolveValue).to.be.eql(retorno);
    });

  });
});
