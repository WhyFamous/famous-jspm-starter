var path = require('path');

var appRoot = 'src/';
var outputRoot = 'dist/';
var deployPath = 'deploy/';
var stylesPath = 'styles/';
var imagesPath = 'images/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: stylesPath+'**/*.css',
  js: 'js/',
  output: outputRoot,
  styles: stylesPath,
  images: imagesPath,
  deploy: deployPath
};
