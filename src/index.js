/* global fetch */

import zipCod from './zipCod';

import address from './address';

import { API_URL } from './config';

export default class ViaCep {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.type = options.type || 'json';

    this.zipCod = zipCod.bind(this)();
    this.address = address.bind(this)();
  }

  request(url) {
    this.url = url;

    return fetch(url, {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }
}
