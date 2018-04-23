import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import ViaCep from '../src';

sinonStubPromise(sinon);
chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('zipCod', () => {
  let viacep;
  let stubedFetch;
  let promise;

  beforeEach(() => {
    viacep = new ViaCep({});

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should zipcode method is exist', () => {
      expect(viacep.zipCod).to.be.exist;
    });

    it('should getJson method exist', () => {
      expect(viacep.zipCod.getJson).to.be.exist;
    });

    it('should getXml method exist', () => {
      expect(viacep.zipCod.getXml).to.be.exist;
    });

    it('should getPiped method exist', () => {
      expect(viacep.zipCod.getPiped).to.be.exist;
    });

    it('should getQuerty method exist', () => {
      expect(viacep.zipCod.getQuerty).to.be.exist;
    });
  });

  describe('getJson', () => {
    it('should call fetch method', () => {
      viacep.zipCod.getJson()
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch the correct URL', () => {
      viacep.zipCod.getJson('29027422')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/29027422/json/');

      viacep.zipCod.getJson('29010250')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/29010250/json/');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves({ endereco: 'rua alberto' });
      const address = viacep.zipCod.getJson('29010250');
      expect(address.resolveValue).to.be.eql({ endereco: 'rua alberto' });
    });
  });

  describe('getXml', () => {
    it('should call fetch method', () => {
      viacep.zipCod.getXml()
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch the correct URL', () => {
      viacep.zipCod.getXml('29027422')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/29027422/xml/');

      viacep.zipCod.getXml('29010250')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/29010250/xml/');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves({ endereco: 'rua alberto' });
      const address = viacep.zipCod.getXml('29010250');
      expect(address.resolveValue).to.be.eql({ endereco: 'rua alberto' });
    });
  });

  describe('getPiped', () => {
    it('should call fetch method', () => {
      viacep.zipCod.getPiped()
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch the correct URL', () => {
      viacep.zipCod.getPiped('29027422')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/29027422/piped/');

      viacep.zipCod.getPiped('29010250')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/29010250/piped/');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves({ endereco: 'rua alberto' });
      const address = viacep.zipCod.getPiped('29010250');
      expect(address.resolveValue).to.be.eql({ endereco: 'rua alberto' });
    });
  });

  describe('getQuerty', () => {
    it('should call fetch method', () => {
      viacep.zipCod.getQuerty()
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch the correct URL', () => {
      viacep.zipCod.getQuerty('29027422')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/29027422/querty/');

      viacep.zipCod.getQuerty('29010250')
      expect(stubedFetch).to.have.be
        .calledWith('https://viacep.com.br/ws/29010250/querty/');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves({ endereco: 'rua alberto' });
      const address = viacep.zipCod.getQuerty('29010250');
      expect(address.resolveValue).to.be.eql({ endereco: 'rua alberto' });
    });
  });
});
