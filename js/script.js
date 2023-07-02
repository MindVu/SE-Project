const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        navEl.classList.add('navbar-scrolled');
    }else
    {
        navEl.classList.remove('navbar-scrolled');
    }
});

function changeBG1() {
    document.getElementById("bg-img").style.backgroundImage = "url('img/carousel1.png')";
 }
 function changeBG2() {
    document.getElementById("bg-img").style.backgroundImage = "url('img/carousel2.jpeg')";
 }
 function changeBG3() {
    document.getElementById("bg-img").style.backgroundImage = "url('img/carousel3.jpeg')";
 }