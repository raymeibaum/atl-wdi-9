angular.module('ThePresidentsApp')
  .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http'];

function PresidentsController($http){
  vm = this;

  vm.addPresident = addPresident;
  vm.all = [];
  vm.newPresident = {};
  vm.removePresident = removePresident;

  activate();

  function activate() {
    getAllPresidents();
  }

  function addPresident(){
    $http
      .post('/presidents', vm.newPresident)
      .then(function pushNewPresident(response) {
        vm.all.push(response.data.president);
        vm.newPresident = {};
      });
  }


  function getAllPresidents() {
    $http
      .get('/presidents')
      .then(function setAll(response) {
        vm.all = response.data.presidents;
      });
  }

  function removePresident(id) {
    $http
      .delete('/presidents/' + id)
      .then(getAllPresidents());
  }
}
