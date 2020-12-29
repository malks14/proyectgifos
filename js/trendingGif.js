//Trending Gif

const apikey = 'ndufihd3YVOMrmoIEogAJJ2vZ8Ysk9mK';
const path = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}`;

fetch(path).then(function(res) {
    return res.json()
}).then(function(json) {
    console.log(json.data[0].images.fixed_width.url)
    const trendingEl = document.getElementById('trending_gif')
    let trendingHTML = ''


    json.data.forEach(function(obj) {
        console.log(obj.images.fixed_width) 

        const url = obj.images.fixed_width.url
        const width = obj.images.fixed_width.width
        const height = obj.images.fixed_width.height
        const title = obj.images.title
        trendingHTML += `<img 
            class="display_gif"
            src="${url}"
            width="${width}" 
            height="${height}" 
            alt="${title}">`

    });

    trendingEl.innerHTML = trendingHTML
}).catch(function(err) {
    console.log(err.message)
})

//Trending Reactions

const pathTerm = `https://api.giphy.com/v1/gifs/categories?api_key=${apikey}`

fetch(pathTerm).then(function(res) {
    return res.json()
}).then(function(json) {
    console.log(json)
    const trendingEl = document.getElementById('trendingTerms')
    let trendingHTML = ''
   
   
    json.data.slice(0,5).forEach(function(obj) {
        
        console.log(obj.name)
        const title = obj.name
        
        trendingHTML += `<p>${title}</p>`
        

    });

    trendingEl.innerHTML = trendingHTML
}).catch(function(err) {
    console.log(err.message)
});