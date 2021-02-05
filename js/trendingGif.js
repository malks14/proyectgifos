//Trending Gif
let limit = 3;
let offset = 0;
const apikey = 'ndufihd3YVOMrmoIEogAJJ2vZ8Ysk9mK';

const gifTrendingCtn = document.getElementById('gifTrendingCtn');
const trendinginfo = document.getElementById('trendinginfo');
const path = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}&offset=${offset}`;


    
    fetch(path).then((response => {
        return response.json();
    })).then((json => {
         
        console.log(json.data)
        arrayTrending = [];
        class gifTrendings {
            constructor(src, title) {
            this.src = src;
            this.title = title;
              }
            }
            
        for (i = 0; i < limit; i++) {
            if (screen.width > 768) {
                limit = 3;
            } else {
                limit = 24;
            }
    
            let newSrc = json.data[i].images.fixed_width.url;
            let newTitle = json.data[i].title;
            let giftTrendings = new gifTrendings(
                newSrc,
                newTitle,
            );
                
            arrayTrending.push(giftTrendings);
              
            let img = document.createElement("img");
           
            img.setAttribute("class", "trending_gif");
            img.setAttribute("class", "display_gif");
            img.src = newSrc;
            img.title = newTitle;
            gifTrendingCtn.appendChild(img);
            
        }
        let btnR = document.createElement("button");
        btnR.setAttribute("id", "arrowRight")
        btnR.setAttribute("class", "fas fa-chevron-right");
        gifTrendingCtn.appendChild(btnR);

        btnR.addEventListener("click", function () {
            if (screen.width > 1280) {
                document.getElementById("gifTrendingCtn").scrollLeft += 1158;
            }
        });
    
    })).catch(err => {
        console.log("error", err);
    })


   


    



    // async function trending() {
    //     console.log(path);
    //     const resp = await fetch(path);
    //     const info = await  resp.json();
    //     return info;
        
    // }

    // let info = trending(info);
    // console.log(info);
    // info.then(data => {
    //     console.log(info);
    //     let arrayTrending = [];
    //     class gifTrending {
    //         constructor (src,title) {
    //             this.src = src;
    //             this.title = title;
    //         }
    //     }

    //     for (i = 0; i < 24; i++) {
    //         let newSrc = json.data[i].images.fixed_width.url;
    //         let newTitle = json.data[i].title;
    //         let giftTrendings = new gifTrendings(
    //           newSrc,
    //           newTitle,
    //         );
    //         arrayTrending.push(giftTrendings);

    //         let img = document.createElement("img");
    //         img.setAttribute("class", "trending_gif");
    //         img.setAttribute("class", "display_gif");
    //         img.src = newSrc;
    //         img.title = newTitle;
            
    //         gifTrendingCtn.appendChild(img);
    //     }
    // }).catch(err => {
    //         console.log("error", err);
    // })




// fetch(path).then(function(res) {
//     return res.json()
// }).then(function(json) {
//     console.log(json.data[0].embed_url)
//     const trendingEl = document.getElementById('trending_gif')
//     let trendingHTML = []


//     json.data.forEach(function(obj) {
//         console.log(obj) 

//         const url = obj.images.fixed_width.url;
//         const title = obj.images.title
//         trendingHTML += `<img 
//             id = "displayMax"
//             class="display_gif"
//             src="${url}"
//             alt="${title}">`

//     });

//     trendingEl.innerHTML = trendingHTML
// }).catch(function(err) {
//     console.log(err.message)
// })

//Increase size Gif 

//     let gifMax = document.getElementById('displayMax');
//     function displayMax(img) {
//         img.style.transform = "scale(1.5)"; 
//     }
// displayMax();


//Trending Reactions

const pathTerm = `https://api.giphy.com/v1/trending/searches?api_key=${apikey}`

fetch(pathTerm).then(function(res) {
    return res.json()
}).then(function(json) {
    console.log(json)
    const trendingEl = document.getElementById('trendingTerms')
    let trendingHTML = [''];
    resultado = trendingHTML.join(", ")
   
    let contador = 0;
    json.data.slice(0,5).forEach(function(obj) {
        
        console.log(json.data.join(", "))
        const title = obj
        if (contador <= 3){
        resultado += `<p class="categories">${title},</p>`
        
        } else {
            resultado += `<p class="categories">${title}</p>`
        }
        contador++;

    });

    trendingEl.innerHTML = resultado
}).catch(function(err) {
    console.log(err.message)
});

