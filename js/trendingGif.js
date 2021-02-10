//Trending Gif
let limit = 3;
let offset = 0;
const apikey = 'ndufihd3YVOMrmoIEogAJJ2vZ8Ysk9mK';

const gifTrendingCtn = document.getElementById('gifTrendingCtn');
const trendinginfo = document.getElementById('trendinginfo');



async function newsSearch() {
    
    const path = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}&offset=${offset}`;
    const resp = await fetch(path);
    const info = await resp.json();
    return info;
}
         
let info = newsSearch()
info.then(json => {
    console.log(json)
    for (i = 0; i < limit; i++) {
        let divmouse = document.createElement("div");
        
          
        let img = document.createElement("img");
        img.setAttribute("src", json.data[i].images.fixed_width.url);
        img.setAttribute("title", json.data[i].title)
        img.setAttribute("class", "trending_gif");
        img.setAttribute("class", "display_gif");
        
        divmouse.appendChild(img);
        gifTrendingCtn.appendChild(divmouse);

        if(screen.width >= 769) {
            let divCards = document.createElement("div");
            let dwnBtn = document.createElement("img");
            let sizeBtn = document.createElement("img");
            let likeBtn = document.createElement("i");
            let title = document.createElement("p")
            let user = document.createElement("p")

            divCards.setAttribute("class", "divCards");

            title.setAttribute("class", "title");
            user.setAttribute("class", "title");

            likeBtn.setAttribute("class", "far fa-heart")
            

            dwnBtn.setAttribute("class", "dwnBtn");
            dwnBtn.setAttribute("src", "/assets/icon-download.svg");

            sizeBtn.setAttribute("src", "/assets/icon-max-normal.svg")

            divCards.appendChild(likeBtn);
            divCards.appendChild(dwnBtn);
            divCards.appendChild(sizeBtn);
            divCards.appendChild(title);
            divCards.appendChild(user);
            divCards.style.visibility = "hidden";

            divmouse.appendChild(divCards);
            

            divmouse.addEventListener("mouseover", () => {
                divCards.style.visibility = "visible";
               
            })
            divmouse.addEventListener("mouseout", () => {
                divCards.style.visibility = "hidden";
            });
            dwnBtn.addEventListener("mouseover", () => {
                dwnBtn.src = "/assets/icon-download-hover.svg";
            });
    
            dwnBtn.addEventListener("mouseout", () => {
                dwnBtn.src = "/assets/icon-download.svg";
            });

            sizeBtn.addEventListener("mouseover", () => {
                fullSize.src = "/assets/icon-max-hover.svg";
            });
    
            sizeBtn.addEventListener("mouseout", () => {
                fullSize.src = "/assets/icon-max-normal.svg";
            });
            
        }
        
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
    
}).catch(err => {
    console.log("error", err);
})



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

