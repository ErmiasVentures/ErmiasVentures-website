
const m=document.querySelector('.menu'),n=document.querySelector('.links');
if(m&&n){m.onclick=()=>n.classList.toggle('open');n.querySelectorAll('a').forEach(a=>a.onclick=()=>n.classList.remove('open'))}
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
