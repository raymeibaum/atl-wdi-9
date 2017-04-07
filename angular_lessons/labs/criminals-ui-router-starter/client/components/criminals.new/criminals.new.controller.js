CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
<<<<<<< HEAD
  const vm = this;

  vm.newCriminal = {}
  vm.createNewCriminal = createNewCriminal;


  function createNewCriminal() {
    CriminalsService
      .createNewCriminal(vm.newCriminal)
      .then(function resolve(response) {
        const criminalId = response.data.criminal._id;
        $state.go('criminalsShow', { criminalId });
      })
  }
=======
	const vm = this;

	vm.createCriminal = createCriminal;
	vm.newCriminal = {};

	activate();

	function activate() {}

	function createCriminal() {
		CriminalsService
			.create(vm.newCriminal)
			.then(function resolve(response) {
				const id = response.data.criminal._id;
				$state.go('criminalsShow', { criminalId: id });
			});
	}
>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497
}

module.exports = CriminalsNewController;
