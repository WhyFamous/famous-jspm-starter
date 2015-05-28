var dest = "./dist";
var src = './src';
var scripts = './scripts';
var deploy = './deploy';
var bundle = './bundle';
var root = './';
var jspm = './jspm_packages'

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest
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
  jspm: {
    root: root,
    src: jspm,
    dest: dest
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  ico: {
    src: src + "/favicon.ico",
    dest: dest
  },
  markup: {
    src: src + "/**/*.html",
    dest: dest + ""
  },
  styles: {
    src: src + "/styles/**",
    dest: dest + "/styles"
  },
  paths: {
    src: src,
    scripts: scripts,
    dest: dest,
    root: root,
    bundle: bundle,
    wildcards: {
      scripts: scripts + '/**/*.js',
      markup: src + '/**/*.html',
      styles: src + '/styles/**/*',
      images: src + '/images/**/*'
    }
  },
  deploy: {
    src: dest,
    dest: deploy
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
