/* global fetch */

/* to run: babel-node index.js */

import ViaCep from '../src/index';

global.fetch = require('node-fetch');

const viacep = new ViaCep({});

const address = viacep.zipCod.getJson('29027422');

address.then(data => console.log(data));
