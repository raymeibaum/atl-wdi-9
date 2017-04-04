angular
  .module('InfamousCriminals')
  .service('CriminalsService', CriminalsService);

  CriminalsService.$inject = ['$http'];

  function CriminalsService($http) {
    var self = this;

    self.addCriminal = addCriminal;
    self.deleteCriminal = deleteCriminal;
    self.getCriminals = getCriminals;

    function addCriminal(criminal){
      return $http.post('/criminals', criminal).then(function(response) {
        return response.data.criminal;
      });
    }

    function deleteCriminal(criminal){
      return $http
        .delete("/criminals/" + criminal._id)
        .then(function(response){
          return response;
        });
    }

    function getCriminals(){
      return $http
        .get('/criminals')
        .then(function(response){
          return response.data.criminals;
      });
    }
  }
