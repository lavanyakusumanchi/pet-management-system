'use strict';

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

// Cart functionality
const cartModal = document.querySelector('.cart-modal');
const cartList = document.querySelector('.cart-list');
const cartCount = document.querySelector('.cart-count');
const cartTotal = document.querySelector('.cart-total');

let cart = [];

const addItemToCart = function (item) {
  cart.push(item);
  updateCart();
}

const updateCart = function () {
  cartCount.textContent = cart.length;
  cartList.innerHTML = '';
  cartTotal.textContent = 'Total: ₹0.00';
  let total = 0;
  cart.forEach((item, index) => {
    const cartItem = document.createElement('li');
    cartItem.textContent = ${item.name} - ₹${item.price};
    cartList.appendChild(cartItem);
    total += item.price;
  });
  cartTotal.textContent = Total: ₹${total}.00;
}

const toggleCartModal = function () {
  cartModal.classList.toggle('active');
}

addEventOnElem(document.querySelector('.cart'), "click", toggleCartModal);

const cartButtons = document.querySelectorAll('.card-action-btn');

addEventOnElem(cartButtons, "click", function (e) {
  const item = {
    name: e.target.parentNode.parentNode.querySelector('.card-title').textContent,
    price: parseInt(e.target.parentNode.parentNode.querySelector('.card-price').getAttribute('value')),
  };
  addItemToCart(item);
  toggleCartModal();
});

const cartCheckoutBtn = document.querySelector('.cart-checkout-btn');

addEventOnElem(cartCheckoutBtn, "click", function () {
  // Add checkout functionality here
  alert('Checkout functionality not implemented yet!');
});

// Close cart modal when clicking outside
document.addEventListener('click', function (e) {
  if (e.target !== cartModal && !cartModal.contains(e.target)) {
    cartModal.classList.remove('active');
  }
});