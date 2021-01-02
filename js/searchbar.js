
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById('search-input');
//probar con searchnput para ver si funciona con lo que pone el usaurio arriba de los gif TAREA

searchForm.addEventListener('submit', function(e) { //e porque siempre submit tiene un event
    e.preventDefault() //es para que que no se reload los gif
    const q = searchInput.value; //esto es lo que el usuario escriba

    search(q)
})
//esta funcion es para cuando se ejecute es porque el usuario busco en la barra


function search(q) { //funcion que busca los gifs. Se pone como parametro q porque es lo que va a escribir el usuario. Por eso tambien el path est adentro de la funcion

    const pathSearch = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${q}`;
   
    fetch(pathSearch).then(function(res) {
        return res.json()
    }).then(function(json) {
        console.log(json.data[0].embed_url)
        const trendingEl = document.getElementById('searchResults')
        let trendingHTML = ''
    
    
        json.data.forEach(function(obj) {
            console.log(obj) 
    
            const url = obj.images.fixed_width.url
            const width = obj.images.fixed_width.width
            const height = obj.images.fixed_width.height
            const title = obj.images.title
            trendingHTML += `<img 
                class="display_search"
                src="${url}"
                width="${width}" 
                height="${height}" 
                alt="${title}">`
    
        });
    
        trendingEl.innerHTML = trendingHTML
    }).catch(function(err) {
        console.log(err.message)
    })
}