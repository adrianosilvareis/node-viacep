# Node ViaCep

[![Build Status](https://travis-ci.org/adrianosilvareis/node-viacep.svg?branch=master)](https://travis-ci.org/adrianosilvareis/node-viacep)
[![Coverage Status](https://coveralls.io/repos/github/adrianosilvareis/node-viacep/badge.svg?branch=master)](https://coveralls.io/github/adrianosilvareis/node-viacep?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/adrianosilvareis/node-viacep/badge.svg?targetFile=package.json)](https://snyk.io/test/github/adrianosilvareis/node-viacep?targetFile=package.json)

A wrapper to work with the [ViaCep Web API](https://viacep.com.br/).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

more info on how to use [node-fech](https://github.com/bitinn/node-fetch).

## Installation

```sh
$ npm install node-viacep --save
```

## How to use

### ES6

```js
// to import a specific method
import ViaCep from 'node-viacep';

const viacep = new ViaCep({
  type: 'json'
})

```

### CommonJS

```js
const ViaCep = require('node-viacep').default;

const viacep = new ViaCep({
  type: 'json'
})
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="viacep.umd.js"></script>

<!-- to import minified version -->
<script src="viacep.umd.min.js"></script>
```

After that the library will be available to the Global as `ViaCep`. Follow an example:

```js
import ViaCep from 'node-viacep';

global.fetch = require('node-fetch');

const viacep = new ViaCep({
  type: 'json'
})

const address = viacep.zipCod.getZip('29010250');

address
  .then(data => data.json())
  .then(data => console.log(data));
```

## Types and returns
> The types to use in constructor

**JSON**

```js
//use in zipCod and address methods

const viacep = new ViaCep({
  type: 'json'
})

//return
{ cep: '29010-250',
  logradouro: 'Rua Alberto de Oliveira Santos',
  complemento: '',
  bairro: 'Centro',
  localidade: 'Vitória',
  uf: 'ES',
  unidade: '',
  ibge: '3205309',
  gia: ''
}
```

**XML**

```js
//use in zipCod and address methods
const viacep = new ViaCep({
  type: 'xml'
})

//return
<?xml version="1.0" encoding="UTF-8"?>
<xmlcep>
  <cep>29010-250</cep>
  <logradouro>Rua Alberto de Oliveira Santos</logradouro>
  <complemento></complemento>
  <bairro>Centro</bairro>
  <localidade>Vitória</localidade>
  <uf>ES</uf>
  <unidade></unidade>
  <ibge>3205309</ibge>
  <gia></gia>
</xmlcep>
```

**PIPED**

```js
//just use in zipCod methods

const viacep = new ViaCep({
  type: 'piped'
})

//return
cep:29010-250|logradouro:Rua Alberto de Oliveira Santos|complemento:|bairro:Centro|localidade:Vitória|uf:ES|unidade:|ibge:3205309|gia:
```

**QUERTY**

```js
//just use in zipCod methods
const viacep = new ViaCep({
  type: 'json'
})

//return
cep=29010-250&logradouro=Rua+Alberto+de+Oliveira+Santos&complemento=&bairro=Centro&localidade=Vit%C3%B3ria&uf=ES&unidade=&ibge=3205309&gia=
```

# Methods

## zipCod methods

> Follow the methods that the library provides.


### zipCod.getZip(query)

> Search for informations about zipcode with provided query. Test in [ViaCep Api](https://viacep.com.br/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

> this method returns the type specified in the constructor

```js
viacep.zipCod.getZip('29010250')
  .then(data => data.text())
  .then(data => console.log(data));
```

### zipCod.getJson(query)

> Search for informations about zipcode with provided query. Test in [ViaCep Api](https://viacep.com.br/ws/01001000/json/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**
> this method returns a json

```js
viacep.zipCod.getJson('29010250')
  .then(data => data.json())
  .then(data => console.log(data));
```

### zipCod.getXml(query)

> Search for informations about zipcode with provided query. Test in [ViaCep Api](https://viacep.com.br/ws/01001000/xml/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**
> this method returns an xml

```js
viacep.zipCod.getXml('29010250')
  .then(data => data.text())
  .then(data => console.log(data));
```

### zipCod.getPiped(query)

> Search for informations about zipcode with provided query. Test in [ViaCep Api](https://viacep.com.br/ws/01001000/piped/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

> this method returns a piped

```js
viacep.zipCod.getPiped('29010250')
  .then(data => data.text())
  .then(data => console.log(data));
```

### zipCod.getQuerty(query)

> Search for informations about zipcode with provided query. Test in [ViaCep web API](https://viacep.com.br/ws/01001000/querty/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

> this method returns a querty

```js
viacep.zipCod.getQuerty('29010250')
  .then(data => data.text())
  .then(data => console.log(data));
```

## address methods

### address.getJson(ids)

> Search for informations about some address with all id's. Test in [ViaCep web APi](https://viacep.com.br/ws/RS/Porto%20Alegre/Domingos/json/).

**Arguments**

| Argument | Type    | Options                         |
|----------|---------|---------------------------------|
|`ids`   |*Array of strings* | ['UF', 'city', 'street']|

**Example**

> this method returns a json

```js
viacep.address.getJson('ES', 'vitoria', 'alberto de')
  .then(data => data.json())
  .then(data => console.log(data));
```

### address.getXml(ids)

> Search for informations about some address with all id's.
Test in [ViaCep web APi](https://viacep.com.br/ws/RS/Porto%20Alegre/Domingos/xml/)..

**Arguments**

| Argument | Type              | Options                 |
|----------|-------------------|-------------------------|
|`ids`     |*Array of strings* | ['UF', 'city', 'street']|

**Example**

> this method returns an xml

```js
viacep.address.getXml('ES', 'vitoria', 'alberto de')
  .then(data => data.text())
  .then(data => console.log(data));
```

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) file for details

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/adrianosilvareis/spotify/tags).

## Authors

| ![Adriano Reis](https://avatars2.githubusercontent.com/u/11447940?s=150&v=4)|
|:---------------------:|
|  [Adriano Reis](https://github.com/adrianosilvareis/)   |

See also the list of [contributors](https://github.com/adrianosilvareis/spotify/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
