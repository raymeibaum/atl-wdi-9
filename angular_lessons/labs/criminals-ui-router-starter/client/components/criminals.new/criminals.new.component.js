const controller = require('./criminals.new.controller.js');
const template = require('./criminals.new.html');

const CriminalsNewComponent = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminalsNew', CriminalsNewComponent);
