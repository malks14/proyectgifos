

//dayMode

// const dayMode = () => {
//     const elementHeader = document.getElementById('headerDark');
//     const elementTrending = document.getElementById('trending');

//     elementHeader.addEventListener('click', () => {
//         elementHeader.classList.toggle("day-mode");
//     });

//     elementTrending.addEventListener('click', () => {
//         elementTrending.classList.toggle("day-mode");
//     });
// }
// dayMode();

// darkMode

const darkMode = (d) => {
    let d = document.getElementById('cambio');
    const elementTrending = document.getElementById('trending');
    const elementHeader = document.getElementById('headerDark');
    const elementTrending = document.getElementById('trending');
    const elementMain = document.getElementById('main');
    const elementFooter = document.getElementById('footer');
    const elementBtn = document.getElementById('burger');
    const elementSearchBar = document.getElementById('searchbar');


    elementHeader.addEventListener('click', () => {
        elementHeader.classList.toggle("dark-mode");
    });

    elementTrending.addEventListener('click', () => {
        elementTrending.classList.toggle("dark-modeTrending");
    });

    elementMain.addEventListener('click', () => {
        elementMain.classList.toggle("dark-mode");
    });

    elementFooter.addEventListener('click', () => {
        elementFooter.classList.toggle("dark-mode");
    });

    elementBtn.addEventListener('click', () => {
        elementBtn.classList.toggle("dark-mode");
    });

    elementSearchBar.addEventListener('click', () => {
        elementSearchBar.classList.toggle("dark-mode");
    });
   

}

darkMode();
//menuhamburger

const navSlide = () => {     
    const burger =  document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    


    //Toggle nav
    burger.addEventListener('click', ()=>{ //funcion para que el boton tome la clase de active
        nav.classList.toggle('nav-active');

         
     
     
     //animacion burger
     burger.classList.toggle('toggle');

    });
   
}

navSlide(); 


