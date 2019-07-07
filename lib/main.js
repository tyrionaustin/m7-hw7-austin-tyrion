'use strict';

var iceCream = document.getElementById('matcha');
iceCream.addEventListener('mouseover', function () {
  iceCream.src = 'matcha2.jpg';
}, false);
iceCream.addEventListener('mouseout', function () {
  iceCream.src = 'matcha-ice-cream.jpg';
}, false);