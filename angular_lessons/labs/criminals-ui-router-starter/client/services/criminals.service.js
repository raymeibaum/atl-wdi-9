angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
	self.createNewCriminal = createNewCriminal;


	// HOW IT DOES STUFF
	function createNewCriminal(criminal) {
		console.log(criminal);
		return $http.post('/api/criminals/', criminal);
	}
	function loadAll() {
		return $http.get('/api/criminals');
	}
	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
	}
}
