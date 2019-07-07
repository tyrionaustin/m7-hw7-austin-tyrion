const flavor = document.getElementById('hidden');
let iceCream = document.getElementById('matcha');
  iceCream.addEventListener('mouseover', () => {
    iceCream.src = 'matcha2.jpg';
  }, false);
  iceCream.addEventListener('mouseout', () => {
    iceCream.src = 'matcha-ice-cream.jpg';
  }, false);




const showMessage = () => {
  hidden.classList.remove('hide')
}
const hideMessage = () => {
  hidden.classList.add('hide')
}

iceCream.addEventListener('mouseover', showMessage);
iceCream.addEventListener('mouseout', hideMessage);
