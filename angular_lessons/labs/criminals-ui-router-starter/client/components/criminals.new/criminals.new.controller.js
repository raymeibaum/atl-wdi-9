CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
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
}

module.exports = CriminalsNewController;
