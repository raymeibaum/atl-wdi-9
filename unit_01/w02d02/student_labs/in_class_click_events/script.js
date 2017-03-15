window.onload = function() {
  var buttonOne = document.getElementById('buttonOne');
  var buttonTwo = document.getElementById('buttonTwo');
  var buttonThree = document.getElementById('buttonThree');

  buttonOne.addEventListener('click', function() {
    alert("You have clicked button one!");
  });

  buttonTwo.addEventListener('click', function() {
    var newParagraph = document.createElement('p');
    newParagraph.id = `definition`;
    newParagraph.innerText = `A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).`
    document.body.append(newParagraph);
  });

  buttonThree.addEventListener('click', function() {
    document.getElementById('definition').remove();
  });
}
