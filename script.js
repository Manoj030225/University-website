const Hide = document.getElementById('hideMenu');
const Show = document.getElementById('showMenu');
const navbar = document.querySelector('.nav-links');

Hide.addEventListener('click',()=>{
    navbar.style.right = '-11.3rem';
    navbar.style.display = 'none'
})
Show.addEventListener('click',function(){
    navbar.style.right = '0';
    navbar.style.display = 'inline-block';
})

