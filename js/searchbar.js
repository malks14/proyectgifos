
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById('search-input');
const trendingEl = document.getElementById('searchResults')
const seatchBtn = document.getElementById('searchBtn');

//probar con searchnput para ver si funciona con lo que pone el usaurio arriba de los gif TAREA

// searchForm.addEventListener('submit', function(e) { //e porque siempre submit tiene un event
//     e.preventDefault() //es para que que no se reload los gif
//     const q = searchInput.value; //esto es lo que el usuario escriba
//     let search_term = document.getElementById("searchTerm")
//     search_term.innerHTML = q;
    
//     search(q)
// })
//esta funcion es para cuando se ejecute es porque el usuario busco en la barra


// function search(q) { //funcion que busca los gifs. Se pone como parametro q porque es lo que va a escribir el usuario. Por eso tambien el path est adentro de la funcion

//     
   
//     fetch(pathSearch).then(function(res) {
//         return res.json()
//     }).then(function(json) {
//         console.log(json.data[0].embed_url)
//         
//         let trendingHTML = ''
    
    
//         json.data.forEach(function(obj) {
//             console.log(obj) 
    
//             const url = obj.images.fixed_width.url
//             const title = obj.images.title
//             trendingHTML += `<img 
//                 class="display_search"
//                 src="${url}"
//                 alt="${title}">`
    
//         });
    
//         trendingEl.innerHTML = trendingHTML
//     }).catch(function(err) {
//         console.log(err.message)
//     })
// }
function search() {
    async function newsSearch(q) {
        const pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;
        console.log(pathSearch);
        const resp = await fetch(pathSearch);
        const info = await resp.json();
        return info;
    }
    
    let info = newsSearch(searchInput.value)
    info.then(data => {
        console.log(data)
        // arraySearch = [];
        // class gifSearch {
        //     constructor(src) {
        //     this.src = src;
        //       }
        //     }

        for (i = 0; i < 12; i++) {
            // let newSrc = data[i].images.fixed_width.url;
           
            // let giftTrendings = new gifSearch(
            //     newSrc
            // );
            // arraySearch.push(giftTrendings);
            let img = document.createElement("img");
            img.setAttribute("src", data[i].images.fixed_width.url);
            // img.src = newSrc;
            trendingEl.appendChild(img);
        }
        

    }).catch(err => {
        console.log("error", err);
    })
    
}

seatchBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const q = searchInput.value;
    let search_term = document.getElementById("searchTerm")
    search_term.innerHTML = q;
    search();
})
searchForm.addEventListener('keyup', (e)=> {
    e.preventDefault()
    if (event.which === 13 || event.keyCode == 13) {
        const q = searchInput.value;
        let search_term = document.getElementById("searchTerm")
        search_term.innerHTML = q;
        search();
    }
    
})