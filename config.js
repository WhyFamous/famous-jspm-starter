System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "dist/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "famous-jspm-app/*": "dist/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.4.7",
    "babel-runtime": "npm:babel-runtime@5.4.7",
    "core-js": "npm:core-js@0.9.13",
    "famous": "npm:famous@0.5.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.2"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:abbrev@1.0.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.3.38": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "private": "npm:private@0.1.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:astw@0.1.0": {
      "esprima-six": "npm:esprima-six@0.0.3"
    },
    "npm:buffer@3.2.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.5",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:commondir@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:concat-stream@1.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:core-js@0.9.13": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:cssauron-glsl@0.0.0": {
      "cssauron": "npm:cssauron@0.0.2"
    },
    "npm:duplexer@0.0.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:emit-function@0.0.2": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:escodegen@0.0.28": {
      "esprima": "npm:esprima@1.0.4",
      "estraverse": "npm:estraverse@1.3.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.32",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima-six@0.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima@1.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:famous@0.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "glslify": "npm:glslify@1.6.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:gl-shader-core@2.2.0": {
      "dup": "npm:dup@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:glsl-deparser@0.0.2": {
      "cssauron-glsl": "npm:cssauron-glsl@0.0.0",
      "through": "npm:through@1.1.2"
    },
    "npm:glsl-extract@0.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cssauron-glsl": "npm:cssauron-glsl@0.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glsl-deparser": "npm:glsl-deparser@0.0.2",
      "glsl-parser": "npm:glsl-parser@0.0.5",
      "glsl-tokenizer": "npm:glsl-tokenizer@0.0.8",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.4",
      "utf8-stream": "npm:utf8-stream@0.0.0"
    },
    "npm:glsl-min-stream@0.0.2": {
      "cssauron-glsl": "npm:cssauron-glsl@0.0.0",
      "shortest": "npm:shortest@0.0.0",
      "through": "npm:through@1.1.2"
    },
    "npm:glsl-parser@0.0.5": {
      "glsl-tokenizer": "npm:glsl-tokenizer@0.0.8",
      "through": "npm:through@1.1.2"
    },
    "npm:glsl-parser@1.0.1": {
      "glsl-tokenizer": "npm:glsl-tokenizer@1.1.1",
      "through": "npm:through@2.3.4"
    },
    "npm:glsl-resolve@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve": "npm:resolve@0.6.3",
      "xtend": "npm:xtend@2.2.0"
    },
    "npm:glsl-tokenizer@0.0.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.4"
    },
    "npm:glsl-tokenizer@0.0.9": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.4"
    },
    "npm:glsl-tokenizer@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.4"
    },
    "npm:glslify-stream@0.4.1": {
      "commondir": "npm:commondir@0.0.1",
      "cssauron": "npm:cssauron@0.0.2",
      "cssauron-glsl": "npm:cssauron-glsl@0.0.0",
      "emit-function": "npm:emit-function@0.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glsl-parser": "npm:glsl-parser@1.0.1",
      "glsl-resolve": "npm:glsl-resolve@0.0.1",
      "glsl-tokenizer": "npm:glsl-tokenizer@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "resolve": "npm:resolve@0.5.1",
      "shortest": "npm:shortest@0.0.0",
      "stream-combiner": "npm:stream-combiner@0.0.2",
      "through": "npm:through@1.1.2",
      "wrap-stream": "npm:wrap-stream@0.0.0"
    },
    "npm:glslify@1.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "concat-stream": "npm:concat-stream@1.4.8",
      "cssauron": "npm:cssauron@0.0.2",
      "cssauron-glsl": "npm:cssauron-glsl@0.0.0",
      "emit-function": "npm:emit-function@0.0.2",
      "esprima": "npm:esprima@1.0.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gl-shader-core": "npm:gl-shader-core@2.2.0",
      "glsl-deparser": "npm:glsl-deparser@0.0.2",
      "glsl-extract": "npm:glsl-extract@0.0.2",
      "glsl-min-stream": "npm:glsl-min-stream@0.0.2",
      "glslify-stream": "npm:glslify-stream@0.4.1",
      "new-from": "npm:new-from@0.0.3",
      "nopt": "npm:nopt@2.2.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "replace-method": "npm:replace-method@0.0.0",
      "resolve": "npm:resolve@0.6.3",
      "shortest": "npm:shortest@0.0.0",
      "sleuth": "npm:sleuth@0.0.0",
      "static-eval": "npm:static-eval@0.2.4",
      "through": "npm:through@2.3.4",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:new-from@0.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "readable-stream": "npm:readable-stream@1.1.13",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:nopt@2.2.1": {
      "abbrev": "npm:abbrev@1.0.6",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:recast@0.5.27": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.3.38",
      "cls": "npm:cls@0.1.5",
      "esprima": "github:ariya/esprima@harmony",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.32"
    },
    "npm:replace-method@0.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "recast": "npm:recast@0.5.27"
    },
    "npm:resolve@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:resolve@0.6.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:shortest@0.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sleuth@0.0.0": {
      "astw": "npm:astw@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-require": "npm:is-require@0.0.0",
      "static-eval": "npm:static-eval@0.1.1"
    },
    "npm:source-map@0.1.32": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:static-eval@0.2.4": {
      "escodegen": "npm:escodegen@0.0.28"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:stream-combiner@0.0.2": {
      "duplexer": "npm:duplexer@0.0.4"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:through@2.3.4": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:through@2.3.7": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:utf8-stream@0.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:wrap-stream@0.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "through": "npm:through@2.3.4"
    }
  }
});

