
var parsePath = require('extract-svg-path').parse
var svgMesh3d = require('svg-mesh-3d')
var parse = require('parse-svg-path')
var extract = require('extract-svg-path')
const fs = require('fs')

var path = extract(__dirname + '/wind.svg')


var svg = parse(path)
  var mesh = svgMesh3d(path, {
    delaunay: false,
    scale: 10
  })
  

fs.writeFile('wind.json', JSON.stringify(mesh), err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
