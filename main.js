const bar = document.getElementById('nav--bar');
const nav = document.getElementById('navbar');
const cart = document.getElementById('cart_sym');

let toggleVal = 0;

const toggle = ()=>{
  if(toggleVal === 0){
    nav.style.right = '0'+'px';
    bar.style.left ='-220' +'px';
    bar.classList.add("ri-close-line");
    cart.innerHTML ="";
    bar.classList.remove("ri-menu-4-line");
    toggleVal++;
  }

  else{
    nav.style.right = '-300' + 'px';
    bar.style.left ="";
    bar.classList.remove("ri-close-line");
    cart.innerHTML =`<a href="#cart.html" id="cart_sym">
    <i class="ri-shopping-bag-4-fill"></i></a>`;
    bar.classList.add("ri-menu-4-line");
    toggleVal--;
  }
};

bar.addEventListener('click', toggle);


// ? For loader

const load = document.querySelector('.loader');

console.log(load);

load.addEventListener('load', ()=>{
  load.style.display = "block";
});