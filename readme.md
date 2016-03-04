# complacent [![Build Status](https://travis-ci.org/bendrucker/complacent.svg?branch=master)](https://travis-ci.org/bendrucker/complacent)

> Google places client for the browser with a sane API


## Install

```
$ npm install --save complacent
```


## Usage

```js
var Maps = require('complacent')
var maps = Maps({
  key: 'yourApiKey'
})

maps.autocomplete.places({input: 'San Francisco'}, function (err, results) {
  //=> null, [{id: 'abc'} ...]  
})
```

## API

For more details on the returned API, see [google-places-browser](https://github.com/bendrucker/google-places-browser).

#### `Complacent(options)` -> `object`

##### options

*Required*  
Type: `object`

Options passed to [load-google-maps](https://github.com/bendrucker/load-google-maps).


## License

MIT © [Ben Drucker](http://bendrucker.me)
