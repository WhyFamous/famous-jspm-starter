# Famous - jspm - starter

## [Work in Progress - use at own risk - more stable]
JSPM is heavy when loading initial apps

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
     npm run fix-glslify # A requirement for build Famous apps with jspm
   ```
> #### Warning: The famous engine has dependencies on glslify, so when there is a new install of famous we must run the fix-glslify script. If you upgrade the version of Famous, you will need to change the script accordingly.
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
 ### Create a Self Executing Package for deployment

  - Build a distributable package to the `dist` folder
  ```bash
    gulp build-sfx  
  ```

---  

###License
  ---  
  - **MIT**


[1]: https://github.com/jspm/jspm-cli/wiki/Getting-Started#2-create-a-project
