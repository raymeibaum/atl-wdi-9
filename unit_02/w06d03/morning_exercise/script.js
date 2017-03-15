//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrelPrice = (total - (small * smallBarrel)) / large;

return largeBarrelPrice;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  let earthCircumferenceInMiles = 24901;
  return (earthCircumferenceInMiles / milesPerGallon) * fuelPrice;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(gallonsCostcoJuice, percentPureFruitJuiceCostco, gallonsKirklandJuice, percentPureFruitJuiceKirkland){
  let totalPureFruitJuice = (gallonsCostcoJuice * (percentPureFruitJuiceCostco / 100)) + (gallonsKirklandJuice * (percentPureFruitJuiceKirkland / 100));
  let totalJuice = gallonsCostcoJuice + gallonsKirklandJuice;
  return totalPureFruitJuice / totalJuice;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
