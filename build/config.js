var destPath = "dist/";
var srcPath = 'src/';
var scriptsPath = 'scripts/';
var deployPath = 'deploy/';
var bundlePath = 'bundle/';
var imagesPath = 'images/';
var stylesPath = 'styles/';
var jspmPath = 'jspm_packages/'

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: './' + destPath
    }
  },
  babel: {
    options: {
      modules: 'system',
      moduleIds: false,
      comments: false,
      compact: false,
      stage:2,
      optional: [
        "es7.decorators",
        "es7.classProperties"
      ]
    }
  },
  paths: {
    src: srcPath,
    dest: destPath,
    bundle: bundlePath,
    deploy: deployPath,
    scripts: scriptsPath,
    images: imagesPath,
    styles: stylesPath,
    ico: '/favicon.ico',
    jspm: jspmPath,
    wildcards: {
      scripts: srcPath + scriptsPath + '**/*.js',
      markup: srcPath + '**/*.html',
      styles: srcPath + stylesPath + '**/*',
      images: srcPath + imagesPath + '**/*'
    }
  },
  deploy: {
    src: destPath,
    dest: deployPath
  },
  production: {
    cssSrc: destPath + '*.css',
    jsSrc: destPath + '*.js',
    dest: destPath
  }
};
