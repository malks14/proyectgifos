
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById('search-input');
const trendingEl = document.getElementById('searchResults')
let seatchBtn = document.getElementById('searchBtn');
const btnMore = document.getElementById('btnMore')
let limitSearch = 24;
let offsetSearch = 0;
let valueInput = "";
let divCtnSearch = document.createElement("div");

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
         
            
            divCtnSearch.setAttribute("class", "divCtnSearch");
            trendingEl.appendChild(divCtnSearch);
            let img = document.createElement("img");
            
            img.setAttribute("src", json.data[i].images.fixed_width.url);
            img.setAttribute("class", "display_search");
            divCtnSearch.appendChild(img)
           
        }

        

    }).catch(err => {
        console.log("error", err);
    })
    

}


seatchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const q = searchInput.value;
    let search_term = document.getElementById("searchTerm")
    search_term.innerHTML = q;
    search();
    showButton();
    // cleanSearch(seatchBtn);
    trendingEl.removeChild(divCtnSearch);
});


// function cleanSearch (element) {
//     element.addEventListener('click', 'keyup', () => {
//         trendingEl.removeChild(divCtnSearch);
                
//     })
// }
searchForm.addEventListener('keyup', (e)=> {
    e.preventDefault();
  
    if (event.which === 13 || event.keyCode == 13) {
        const q = searchInput.value;
        let search_term = document.getElementById("searchTerm")
        search_term.innerHTML = q;
        search();
        showButton();
        // cleanSearch(searchForm);
        trendingEl.removeChild(divCtnSearch);
    }
    
    
})

valueInput = searchInput.value;
searchInput.addEventListener('keyup', () => {
    showCross();
})

function showCross() {
    if (valueInput.length >= 1) {
        // suggCross.classList.remove("hideCross");
        seatchBtn.style.display = "none";
      } else {
        // suggCross.classList.add("hideCross");
        seatchBtn.style.display = "block";
    }
}

function showButton() {
    if (searchInput.value != "") {
        btnMore.classList.toggle('btnDisplay');
    }
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
