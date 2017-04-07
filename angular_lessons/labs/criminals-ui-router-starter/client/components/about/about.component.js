const template = require(__dirname + '/about.html');
const controller = require(__dirname + '/about.controller.js');

const AboutComponent = {
  controller: controller,
  template: template
}

angular
  .module('criminals')
  .component('about', AboutComponent);
