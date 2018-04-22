//address zipcode

import zipCod from './zipCod';

export default class ViaCep {
  constructor() {
    this.zipCod = zipCod.bind(this)();
  }

  request() {

  }
}
