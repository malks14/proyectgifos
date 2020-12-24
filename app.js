// aggregate toggle functions

function darkMode() {
    darkHeader();
    darkMain();
    darkTrending();
    darkFooter();
    
   
}

//dayMode
function dayMode() {
    dayTrending();
    
}

function dayTrending() {
    var element = document.getElementById('trending');
    element.classList.toggle("day-modeTrending");
}

// darkMode
function darkTrending() {
    var element = document.getElementById('trending');
    element.classList.toggle("dark-modeTrending");
}

function darkMain() {
    var element = document.getElementById('main');
    element.classList.toggle("dark-mode");
}

function darkHeader() {
    var elementTwo = document.getElementById('headerDark')
    elementTwo.classList.toggle("dark-mode")

    
}

function darkFooter() {
    var element = document.getElementById('footer');
    element.classList.toggle("dark-mode");
}

//menuhamburger

function changeClass() {
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    
}

const navSlide = () => {     //asi es una funcion vacia
    const burger =  document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    //Toggle nav
    burger.addEventListener('click', ()=>{ //funcion para que el boton tome la clase de active
        nav.classList.toggle('nav-active');

     //Animacion li (links)
    // navLinks.forEach((link, index) => {  //funcion para que quede siempre la animacion de li por segundos
    //     if(link.style.animation) {
    //         link.style.animation = ''
    //     } else {
    //      link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 1.5 }s`; //animacion para que los li aparezcan de a poco
    //     }
         
     
    //  });
     //animacion burger
     burger.classList.toggle('toggle');

    });
   
}

navSlide(); //para llamar a la funcion

