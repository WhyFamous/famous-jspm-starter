// outputs changes to files to the console
module.exports = function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}
