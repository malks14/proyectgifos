//dark mode
const darkMode = () => {
    const darklink = document.getElementById('day');
    const footer = document.getElementById('footer');
    const darksearch = document.getElementById('searchbar');
    const darkbtn = document.getElementById('burger');
    const darkheaer = document.getElementById('headerDark');
    const darkmain = document.getElementById('main');
    const darktrending = document.getElementById('trending');


    darklink.addEventListener('click', () => {
        footer.classList.toggle("dark-mode");
        darksearch.classList.toggle("dark-mode");
        darkbtn.classList.toggle("dark-mode");
        darkheaer.classList.toggle("dark-mode");
        darkmain.classList.toggle("dark-mode");
        darktrending.classList.toggle("dark-modeTrending");
    });
}

darkMode();


//menuhamburger
const navSlide = () => {     
    const burger =  document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
   


    //Toggle nav vaya a la izquierda
    burger.addEventListener('click', ()=>{ //funcion para que el boton tome la clase de active
        nav.classList.toggle('nav-active');

         
     
     
     //animacion burger para que se haga la X 
     burger.classList.toggle('toggle');

    });
   
}

navSlide(); 






let element = document.getElementById('day').innerHTML = "Modo Nocturno";
function changeName(){
        
    if (element === true) {
        document.getElementById('day').innerHTML = "Modo Nocturno";
    } else {
        document.getElementById('day').innerHTML = "Modo Diurno";
    }

}
changeName();

