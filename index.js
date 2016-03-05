'use strict'

var Lazy = require('lazy-async')
var partial = require('ap').partial
var Google = require('load-google-maps')
var Autocomplete = require('google-places-browser/autocomplete')
var Places = require('google-places-browser/places')

module.exports = Complacent

var methods = [
  'autocomplete.place',
  'autocomplete.query',
  'places.details',
  'places.nearby',
  'places.radar',
  'places.text'
]

function Complacent (options) {
  return Lazy(methods, partial(load, options))
}

function load (options, callback) {
  Google(options, function (err, google) {
    if (err) return callback(err)
    callback(null, {
      autocomplete: Autocomplete(google),
      places: Places(google)
    })
  })
}
