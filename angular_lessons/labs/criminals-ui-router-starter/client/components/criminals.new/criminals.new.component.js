const controller = require('./criminals.new.controller.js');
const template = require('./criminals.new.html');

<<<<<<< HEAD
const CriminalsNewComponent = {
=======
const component = {
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
	.component('criminalsNew', CriminalsNewComponent);
=======
	.component('criminalsNew', component);
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
