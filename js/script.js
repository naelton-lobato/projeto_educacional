let btnDarkMode = document.querySelector('#dark');
let body = document.querySelector('body');
let area = document.querySelector('.area')
let p = document.querySelector('article');

btnDarkMode.addEventListener('click',()=>{
  body.classList.toggle('dark_bg');
  area.classList.toggle('dark_bg');
  h1.classList.toggle('dark_color');
});