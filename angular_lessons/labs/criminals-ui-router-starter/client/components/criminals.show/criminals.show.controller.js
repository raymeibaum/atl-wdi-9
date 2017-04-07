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
}

module.exports = CriminalsShowController;
