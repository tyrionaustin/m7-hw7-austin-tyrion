'use strict';

var flavor = document.getElementById('hidden');
var iceCream = document.getElementById('matcha');
iceCream.addEventListener('mouseover', function () {
  iceCream.src = 'matcha2.jpg';
}, false);
iceCream.addEventListener('mouseout', function () {
  iceCream.src = 'matcha-ice-cream.jpg';
}, false);

var showMessage = function showMessage() {
  hidden.classList.remove('hide');
};
var hideMessage = function hideMessage() {
  hidden.classList.add('hide');
};

iceCream.addEventListener('mouseover', showMessage);
iceCream.addEventListener('mouseout', hideMessage);