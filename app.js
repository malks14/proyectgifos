function darkMode() {
    darkHeader();
    darkMain();
}



function darkMain() {
    var element = document.getElementById('main');
    element.classList.toggle("dark-mode");
}

function darkHeader() {
    var elementTwo = document.getElementById('headerDark')
    elementTwo.classList.toggle("dark-mode")
}


function changeClass() {
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    
}