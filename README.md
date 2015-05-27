# Famous - jspm - starter

## [Work in Progress - use at own risk]

---  

##Installing & Running the starter
 - Make sure `jspm` CLI is installed globally if you have not already  

  ```bash
    npm -install jspm/jspm-cli -g
  ```

 - Clone the repo or a fork of the repo

  ```bash
    git clone https://github.com/WhyFamous/famous-jspm-starter.git
  ```

 - Go to the project path

  ```bash
      cd famous-jspm-starter
  ```

 - Install `npm` packages

    ```bash
        npm install
    ```

 - Install `jspm` packages (skipping prompts `-y`)

  ```bash
    jspm install -y  
    npm run fix-glslify  
  ```
> #### Warning: The famous engine has dependencies on glslify, so when there is a new install of famous we must run the fix-glslify script.
> Hopefully in the future this can be handled by a Gulp task

 - Use `gulp` command to start `browser-sync` server and run the app

  ```bash
    gulp watch
  ```

  Or optionally use a bundle build

  ```bash
    gulp watch-bundle
  ```

 - Start your browser and go to url **http://localhost:9000**  

---  

##How to build this starter from scratch without gulp

 - Make sure you have the `jspm-cli` installed globally

  ```bash
    npm -install jspm/jspm-cli -g
  ```

 - Lock down jspm for the project

  ```bash
    cd famous-jspm
    npm install jspm --save-dev
  ```

 - [Create a new project][1] config

  ```bash
    jspm init
  ```

 - Choose default for prompts, but change as you would need
 - I prefer Babel as a ES6 transpiler, but that is up to you
 - Load in `Famo.us` library for jspm

  ```bash
    jspm install npm:famous@<latest version>
    # i.e jspm install npm:famous@0.5.0
  ```

####Write application code
Create our dpendencies code, can be written in any javascript format (including ES6)

`/src/main.js`
```
    'use strict';

    // Famous dependencies
    import DOMElement from 'famous/dom-renderables/DOMElement';
    import FamousEngine from 'famous/core/FamousEngine';
    import { SpinnerAnimation as Spinner } from './js/animation/SpinnerAnimation';
    import { LogoNode as Logo } from './js/LogoNode';

    // Boilerplate code to make your life easier
    FamousEngine.init();

    ....

```
####Entry to run code
`index.html`
```html
<!DOCTYPE HTML>
<html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Famous | JSPM Starter</title>
      <link rel="icon" href="favicon.ico?v=1" type="image/x-icon">
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
          html, body {
              width: 100%;
              height: 100%;
              margin: 0px;
              padding: 0px;
          }
          body {
              position: absolute;
              -webkit-transform-style: preserve-3d;
              transform-style: preserve-3d;
              -webkit-font-smoothing: antialiased;
              -webkit-tap-highlight-color: transparent;
              -webkit-perspective: 0;
              perspective: none;
              overflow: hidden;
          }
      </style>

      <!-- jspm ES6 -->
      <script src="jspm_packages/system.js"></script>
      <script src="config.js"></script>
      <script>
        System.import('main');
      </script>
  </head>
  <body></body>
</html>
```

[1]: https://github.com/jspm/jspm-cli/wiki/Getting-Started#2-create-a-project
