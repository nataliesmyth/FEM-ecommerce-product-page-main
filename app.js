/***** Mobile Navigation *****/
const nav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
/***** Pick number of items *****/
const removeItem = document.getElementById('svg-minus');
const addItem = document.getElementById('svg-plus');
let itemAmountDisplay = document.getElementById('itemAmount');
let count = 0;

function addItemAmount() {
  count++;
  itemAmountDisplay.innerText = count;
}

function subtractItemAmount() {
  if (count > 0) {
    count--;
    itemAmountDisplay.innerText = count;
  }
}

navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');
  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

removeItem.addEventListener('click', subtractItemAmount);
addItem.addEventListener('click', addItemAmount);