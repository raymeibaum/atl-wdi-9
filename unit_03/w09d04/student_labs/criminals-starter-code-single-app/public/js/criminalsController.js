angular
  .module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];

function CriminalsController($http) {
  var vm = this;

  vm.all = [];
  vm.newCriminal = {};
  vm.addCriminal = addCriminal;
  vm.deleteCriminal = deleteCriminal;

  activate();

  function activate() {
    getAllCriminals();
  }

  function addCriminal() {
    $http
    .post('/criminals', vm.newCriminal)
    .then(function pushNewCriminal(response) {
      console.log(response.data.criminal);
      vm.all.push(response.data.criminal);
      vm.newCriminal = {};
    });
  }
  function deleteCriminal(id) {
    $http
      .delete('/criminals/' + id)
      .then(getAllCriminals());
  }
  function getAllCriminals() {
    $http
      .get('/criminals')
      .then(function setAllCriminals(response) {
        vm.all = response.data.criminals;
      });
  }

}
