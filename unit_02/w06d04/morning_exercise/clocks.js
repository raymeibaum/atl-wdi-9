var calculate = function(hourhand, minutehand) {
  if (hourhand > 12 || hourhand < 0 || minutehand > 60 || minutehand < 0) {
    return 'out of range'
  }
  var totalMinutes = hourhand * 60 + minutehand;
  if (totalMinutes > 720) {
    totalMinutes -= 720;
  }
  var percentOfMinutesInClock = totalMinutes / 720 //720 minutes in 12 hours
  var hourHandDegress = percentOfMinutesInClock * 360;

  return [hourHandDegress, 360 - hourHandDegress];
};

// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};
