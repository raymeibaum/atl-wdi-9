const controller = require('./criminals.show.controller.js');
const template = require('./criminals.show.html');

<<<<<<< HEAD
const CriminalsShowComponent = {
=======
const component = {
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
	controller: controller,
	template: template
};

angular
	.module('criminals')
<<<<<<< HEAD
	.component('criminalsShow', CriminalsShowComponent);
=======
	// call this with <criminals-show></criminals-show>
	.component('criminalsShow', component);
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
