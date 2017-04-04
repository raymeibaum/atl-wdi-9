angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService){
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

  getCriminals();
  function getCriminals(){
    CriminalsService.getCriminals().then(function(criminals) {
      self.all = criminals;
    });
  }

  function addCriminal(){
    CriminalsService.addCriminal(self.newCriminal).then(function(criminal) {
      self.all.push(criminal);
      self.newCriminal = {}
    });
  }

  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal).then(function(response){
      console.log(response.data.message);
      var index = self.all.indexOf(criminal);
      self.all.splice(index, 1);
    });
  }

}
