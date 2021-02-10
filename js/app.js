//dark mode
let modoNoc = false;
const darkMode = () => {
    const darklink = document.getElementById('day');
    const footer = document.getElementById('footer');
    const darksearch = document.getElementById('searchbar');
    const darkbtn = document.getElementById('burger');
    const darkheaer = document.getElementById('headerDark');
    const darkmain = document.getElementById('main');
    const darktrending = document.getElementById('trending');
    const darksugg = document.getElementsByClassName('searchSugg');
    const darkp = document.getElementsByClassName('pSugg');


    darklink.addEventListener('click', () => {
        //funcion para cambiar el li
        function changeLi(){
            let modoNocturno = "Modo Nocturno";
            let modoDiurno = "Modo Diurno";
        if (modoNoc == false) {
            document.getElementById('day').innerHTML = modoDiurno;
            modoNoc = true;
    
        } else {
            document.getElementById('day').innerHTML = modoNocturno;
            modoNoc = false;
        }
        darkheaer.classList.toggle("dark-mode");
        footer.classList.toggle("dark-mode");
        darkmain.classList.toggle("dark-mode");
        darktrending.classList.toggle("dark-modeTrending");
        darksearch.classList.toggle("dark-mode");
        darkbtn.classList.toggle("dark-mode");
        darksugg.classList.toggle("dark-mode");
        darkp.classList.toggle("dark-mode");
        

        
        
        
    
    }
    changeLi();
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









