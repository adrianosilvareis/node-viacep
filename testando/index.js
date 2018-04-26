import ViaCep from './lib/index';

global.fetch = require('node-fetch');

const viacep = new ViaCep({ type: 'json' });

const address = viacep.zipCod.getJson('29010250');

address
  .then(data => data.json())
  .then(data => console.log(data));
