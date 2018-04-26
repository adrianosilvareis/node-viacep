import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import ViaCep from '@/index';
import { API_URL } from '@/config';

sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('ViaCep Library', () => {
  it('should create an instance of ViaCep', () => {
    const viacep = new ViaCep();

    expect(viacep).to.be.an.instanceof(ViaCep);
  });

  it('should receive apiURL as an option', () => {
    const viacep = new ViaCep({
      apiURL: 'blabla',
    });

    expect(viacep.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provider', () => {
    const viacep = new ViaCep({});

    expect(viacep.apiURL).to.be.equal(API_URL);
  });

  describe('request method', () => {
    let stubedFetch;
    let promise;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
      stubedFetch.restore();
    });

    it('should have request method', () => {
      const viacep = new ViaCep({});

      expect(viacep.request).to.exist;
    });

    it('should call fetch when request', () => {
      const viacep = new ViaCep({});

      viacep.request('url');
      expect(stubedFetch).to.have.been.called;
    });

    it('should call fetch with right url passed', () => {
      const viacep = new ViaCep({});

      viacep.request('url');
      expect(stubedFetch).to.have.been.calledWith('url');
    });
  });

});
