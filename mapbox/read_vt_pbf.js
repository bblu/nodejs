
var fs = require('fs')
var Pbf = require('pbf')
var vtpbf = require('vt-pbf')
var VectorTile = require('vector-tile').VectorTile

var data = fs.readFileSync(__dirname + '/17_48079_110808.pbf')
var tile = new VectorTile(new Pbf(data))

console.log(tile)

//D:\node\vt_pbf>node index.js
VectorTile {
    layers:
     { '590':
        VectorTileLayer {
          version: 1,
          name: '590',
          extent: 4096,
          length: 4,
          _pbf: [Object],
          _keys: [Array],
          _values: [Array],
          _features: [Array] },
       '597':
        VectorTileLayer {
          version: 1,
          name: '597',
          extent: 4096,
          length: 113,
          _pbf: [Object],
          _keys: [Array],
          _values: [Array],
          _features: [Array] } } }
        
