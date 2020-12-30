//Trending Gif

const apikey = 'ndufihd3YVOMrmoIEogAJJ2vZ8Ysk9mK';
const path = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}`;

fetch(path).then(function(res) {
    return res.json()
}).then(function(json) {
    console.log(json.data[0].embed_url)
    const trendingEl = document.getElementById('trending_gif')
    let trendingHTML = ''


    json.data.forEach(function(obj) {
        console.log(obj) 

        const url = obj.images.fixed_width.url
        const title = obj.images.title
        trendingHTML += `<img 
            class="display_gif"
            src="${url}"
            alt="${title}">`

    });

    trendingEl.innerHTML = trendingHTML
}).catch(function(err) {
    console.log(err.message)
})

//Trending Reactions

const pathTerm = `https://api.giphy.com/v1/trending/searches?api_key=${apikey}`

fetch(pathTerm).then(function(res) {
    return res.json()
}).then(function(json) {
    console.log(json)
    const trendingEl = document.getElementById('trendingTerms')
    let trendingHTML = ''
   
   
    json.data.slice(0,5).forEach(function(obj) {
        
        console.log(obj)
        const title = obj
        
        trendingHTML += `<p class="categories">${title}</p>`
        

    });

    trendingEl.innerHTML = trendingHTML
}).catch(function(err) {
    console.log(err.message)
});