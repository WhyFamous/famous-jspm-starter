// npm install bluebird

var childProcess = require('child_process');
var fs = require('fs');
var path = require('path');
var util = require('util');

var Promise = require('bluebird');

var basepath = './';
var npmpath = 'node_modules';
var jspmpath = 'jspm_packages';
var BASE_DIR = path.resolve(__dirname, basepath);
var NPM_DIR = path.join(__dirname, npmpath);
var JSPM_DIR = path.join(__dirname, jspmpath);
var FAMOUS_DIR = path.join(JSPM_DIR, '/npm/famous@0.5.2');
var GLSL_DIR = path.join(FAMOUS_DIR, 'webgl-shaders');
console.log('__dirname=',__dirname)
console.log('BASE_DIR=',BASE_DIR)
console.log('NPM_DIR=',NPM_DIR)
console.log('JSPM_DIR=',JSPM_DIR)
console.log('FAMOUS_DIR=',FAMOUS_DIR)
console.log('GLSL_DIR=',GLSL_DIR)

function bundle(file) {
  return new Promise(function (resolve, reject) {
    var command = util.format(
      '%s %s',
      path.join(NPM_DIR, '/.bin/glslify'),
      path.join(GLSL_DIR, file)
    );
    console.log('command=',command);
    childProcess.exec(command, function (err, stdout, stderr) {
      if (err) {return reject(err);}
      if (stderr) {console.error(stderr);}
      resolve(stdout);
    });
  });
}

Promise.props({
  vertex: bundle('VertexShader.glsl'),
  fragment: bundle('FragmentShader.glsl')
}).then(function (result) {
  var filePath = path.resolve(GLSL_DIR, 'index.js');
  var code = 'module.exports = ' + JSON.stringify(result, null, 2) + ';';
  return Promise.promisify(fs.writeFile)(filePath, code);
});
