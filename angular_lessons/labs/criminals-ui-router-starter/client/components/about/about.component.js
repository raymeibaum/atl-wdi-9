<<<<<<< HEAD
const template = require(__dirname + '/about.html');
const controller = require(__dirname + '/about.controller.js');

const AboutComponent = {
  controller: controller,
  template: template
}

angular
  .module('criminals')
  .component('about', AboutComponent);
=======
const controller = require('./about.controller.js');
const template = require('./about.html');

const component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('about', component);
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
