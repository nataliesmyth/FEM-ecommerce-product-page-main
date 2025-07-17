/***** Mobile Navigation *****/
const nav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
/***** Pick number of items *****/
const removeItem = document.getElementById('svg-minus');
const addItem = document.getElementById('svg-plus');
let itemAmountDisplay = document.getElementById('itemAmount');
let count = 0;
const cartBtn = document.getElementById('cartIcon');
const cart = document.querySelector('.cart');
const addToCartBtn = document.getElementById('addToCart');
let totalCartItems = 0;
let cardCount = document.getElementById('cartCount');

// Images and thumbnails
const hero = document.querySelectorAll('.heroImg');
console.log(hero)

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

function toggleCart() {
  let isVisible = cart.getAttribute('data-visible');
  if (isVisible ==='false') {
    cart.setAttribute('data-visible', true);
  } else {
    cart.setAttribute('data-visible', false);
  }
}

function addToCart() {
  console.log(count);
  if (count > 0) {
    totalCartItems += count;
    console.log(totalCartItems);
    cardCount.innerText = totalCartItems;
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
cartBtn.addEventListener('click', toggleCart);
addToCartBtn.addEventListener('click', addToCart);

// Next and Previous images mobile
document.addEventListener('click', function (e) {
  console.log(e.target.id)
  if (e.target.id === 'mobileNext') {
    heroArr = Array.from(hero);
    console.log(heroArr)
    heroArr.forEach(img => {
      const visible = img.getAttribute('data-active')
      if (visible === 'true') {
        let index = heroArr.indexOf(img);
        console.log(index+=1)
        console.log(heroArr.indexOf(index ++))
        console.log('id of visible image is', visible)
      }
    })
  }
})