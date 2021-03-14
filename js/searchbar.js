
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById('search-input');
const trendingEl = document.getElementById('searchResults')
const seatchBtn = document.getElementById('searchBtn');
const btnMore = document.getElementById('btnMore')
let limitSearch = 24;
let offsetSearch = 0;

function search() {
    async function newsSearch(q) {
        const pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}&limit=${limitSearch}&offset=${offsetSearch}`;
        
        const resp = await fetch(pathSearch);
        const info = await resp.json();
        return info;
    }
    
    let info = newsSearch(searchInput.value)
    info.then(json => {
       
     

        for (i = 0; i < limitSearch + offsetSearch; i++) {
         
            let img = document.createElement("img");
            img.setAttribute("src", json.data[i].images.fixed_width.url);
            img.setAttribute("class", "display_search");
            trendingEl.appendChild(img);
           
        }

        

    }).catch(err => {
        console.log("error", err);
    })
    
}

function remoChild (img) {
    trendingEl.removeChild(img);
        
}
seatchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const q = searchInput.value;
    let search_term = document.getElementById("searchTerm")
    search_term.innerHTML = q;
    search();
    showButton();
    remoChild()
    
   
});



searchForm.addEventListener('keyup', (e)=> {
    e.preventDefault()
     //TAREAponer condicion para que no se modifique
     crossSugg()
    
  
    if (event.which === 13 || event.keyCode == 13) {
        const q = searchInput.value;
        let search_term = document.getElementById("searchTerm")
        search_term.innerHTML = q;
        search();
        showButton();
    }
    remoChild()
    
})



function showButton() {
    if (searchInput.value != "") {
        btnMore.classList.toggle('btnDisplay');
    }
}

function crossSugg(){
 
    suggCross.classList.toggle('suggCross');
    seatchBtn.classList.toggle('hideCross');
}

btnMore.addEventListener('click', (e) => {
    e.preventDefault()
    limitSearch += 8;
    offsetSearch += 12;
    if (limitSearch >= 40) {
        btnMore.classList.remove('btnDisplay')
    }
    search(searchInput.value, limitSearch);
})
