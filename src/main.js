let iceCream = document.getElementById('matcha');
  iceCream.addEventListener('mouseover', () => {
    iceCream.src = 'matcha2.jpg';
  }, false);
  iceCream.addEventListener('mouseout', () => {
    iceCream.src = 'matcha-ice-cream.jpg';
  }, false);
