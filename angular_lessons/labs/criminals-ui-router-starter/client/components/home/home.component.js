const controller = require('./home.controller.js');
const template = require('./home.html');

<<<<<<< HEAD
const HomeComponent = {
=======
const component = {
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
	.component('home', HomeComponent);
=======
	.component('home', component);
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
