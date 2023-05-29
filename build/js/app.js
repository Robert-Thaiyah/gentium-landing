const btn = document.querySelector('.btn');
const nav =  document.querySelector('.mobile-nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('hidden')
})