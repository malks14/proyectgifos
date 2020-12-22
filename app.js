// aggregate toggle functions

function darkMode() {
    darkHeader();
    darkMain();
    darkTrending();
    darkFooter();
}

//dayMode

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