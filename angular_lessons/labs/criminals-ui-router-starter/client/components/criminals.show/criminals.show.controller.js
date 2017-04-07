<<<<<<< HEAD
CriminalsShowController.$inject = ['$stateParams','CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
  const vm = this;

  vm.current = {};
  vm.loadCurrentCriminal = loadCurrentCriminal;

  activate();

  function activate() {
    vm.loadCurrentCriminal()
  }

  function loadCurrentCriminal() {
    CriminalsService
      .loadCurrent($stateParams.criminalId)
      .then(function resolve(response) {
        vm.current = response.data.criminal;
      });
  }
=======
CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		console.log($stateParams);

		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
				vm.current = response.data.criminal;
			});
	}
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
}

module.exports = CriminalsShowController;
