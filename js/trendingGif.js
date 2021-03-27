//Trending Gif
let limit = 20;
let offset = 0;
const apikey = 'ndufihd3YVOMrmoIEogAJJ2vZ8Ysk9mK';
const favCtn = document.getElementById('favCtn');
const gifTrendingCtn = document.getElementById('gifTrendingCtn');
const trendinginfo = document.getElementById('trendinginfo');
let fav_Gif = document.getElementById('fav_Gif');
const body = document.getElementById("body");
const btnR = document.getElementById('arrowRight');
const btnL = document.getElementById('arrowLeft');
const hiddenGif = document.getElementById('hiddenFav');



//parte favoritos
let favArray =  [];
function asignarFav(elemento,storage,id){
   
    elemento.addEventListener("click",e=>{
    e.preventDefault();
     
      let objGif ={
        
        gif: storage,
        id:id
        }
        let getArr = JSON.parse(localStorage.getItem("gif")|| "[]");
          const favSelected = getArr.find(e=> e.id ===objGif.id);

        if(getArr[0]===undefined || getArr[0]===null){
          
          console.log("no hay nada");
          favArray.push(objGif);
          
          console.log(favArray);
          localStorage.setItem("gif",JSON.stringify(favArray));
          asignarFavs();
        }else{
   
            if(
       
                favArray.id == favSelected
            ){
              console.log("agregar")
              favArray.push(objGif)
              localStorage.setItem("gif",JSON.stringify(favArray));
              asignarFavs();
            }else{
              console.log("ya esta")
            }
          
        }

        })
       

}

function asignarFavs(){

fav_Gif.innerHTML = '';
favArray = JSON.parse(localStorage.getItem("gif"));
if(favArray == null) {
    favArray = [];
}else{
    favCtn.style.visibility = "hidden";
 for(i = 0; i< favArray.length;i++) {
    let divGifM = document.createElement("div");
    divGifM.setAttribute("class", "divGifMCtn")

    let gifimg = document.createElement('img');
    gifimg.setAttribute("class", "img_gif")
    gifimg.src = `${favArray[i].gif}`;
    fav_Gif.appendChild(gifimg);

    divGifM.appendChild(gifimg);
    fav_Gif.appendChild(divGifM);

    let divCards = document.createElement("div");

    let divBtnFav = document.createElement("div");
   
    let dwnBtnFav = document.createElement("img");
    let sizeBtnFav = document.createElement("img");
    let likeBtnFav = document.createElement("img");
    let title = document.createElement("h4")
    let userName = document.createElement("h4")

    likeBtnFav.setAttribute("src", "/assets/icon-fav.svg")
    likeBtnFav.setAttribute("class", "lkeBtnFavs")
    gifimg.id = `${favArray[i].id}`;
    likeBtnFav.addEventListener('click', () => {
        eliminarFavoritos(gifimg.id)
    })
    
    dwnBtnFav.setAttribute("src", "/assets/icon-download.svg");

    sizeBtnFav.setAttribute("src", "/assets/icon-max-normal.svg");

    divCards.setAttribute("class", "divCardsFav");
    divCards.style.visibility = "hidden";
    divGifM.appendChild(divCards);
    
    divBtnFav.appendChild(likeBtnFav)
    divBtnFav.appendChild(dwnBtnFav);
    divBtnFav.appendChild(sizeBtnFav);

    divCards.appendChild(divBtnFav)


    divGifM.addEventListener("mouseover", () => {
        divCards.style.visibility = "visible";
        divBtnFav.style.visibility = "visible";
               
    })
    divGifM.addEventListener("mouseout", () => {
        divCards.style.visibility = "hidden";
        divBtnFav.style.visibility = "hidden";
    });
}}}



function obtenerListadoFavoritos() {
    return JSON.parse(localStorage.getItem('gif'));
}
let listado_favoritos = obtenerListadoFavoritos();

function eliminarFavoritos(idGifFavorito) {
    let indiceFavorito = listado_favoritos.indexOf(idGifFavorito);
    listado_favoritos.splice(indiceFavorito, 1);
    localStorage.setItem('gif', JSON.stringify(listado_favoritos));
    asignarFavs();
}

//parte favoritos



async function newsSearch() {
    
    const path = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}&offset=${offset}`;
    const resp = await fetch(path);
    const info = await resp.json();
    return info;
}
         
let info = newsSearch()
info.then(json => {
    
    for (i = 0; i < limit; i++) {
        let divmouse = document.createElement("div");
        divmouse.setAttribute("class", "divCtn")
        
          
        let img = document.createElement("img");
        img.setAttribute("src", json.data[i].images.fixed_width.url);
        img.setAttribute("title", json.data[i].title)
        img.setAttribute("class", "trending_gif");
        img.setAttribute("class", "display_gif");
        expandGif(img)

  
        
        divmouse.appendChild(img);
        gifTrendingCtn.appendChild(divmouse);

        
            let divCards = document.createElement("div");
            let dwnBtn = document.createElement("img");
            let sizeBtn = document.createElement("img");
            
            let title = document.createElement("h4")
            let userName = document.createElement("h4")

            divCards.setAttribute("class", "divCards");
       

            title.textContent =json.data[i].title
            title.setAttribute("class", "title");

            userName.textContent = json.data[i].username;
            userName.setAttribute("class", "user");
            
            let likeBtn = document.createElement("img");
            likeBtn.setAttribute("src", "/assets/icon-fav.svg")

            let id = json.data[i].id;
            asignarFav(likeBtn, img.src, id);
            

            dwnBtn.setAttribute("class", "dwnBtn");
            dwnBtn.setAttribute("src", "/assets/icon-download.svg");
            dwnBtn.addEventListener("click", async function () {
                let a = document.createElement("a");
                let response = await fetch(img.src);
                let gif = await response.blob();
                a.download = title.textContent;
                a.href = window.URL.createObjectURL(gif);
                a.dataset.downloadurl = [
                  "application/octet-stream",
                  a.download,
                  a.href,
                ].join(":");
                a.click();
              });

            

            sizeBtn.setAttribute("src", "/assets/icon-max-normal.svg");
            sizeBtn.setAttribute("class", "sizebtn");
            expandGif(sizeBtn, json.data[i].images.original.url, json.data[i].title, json.data[i].username);

            divCards.appendChild(likeBtn);
            divCards.appendChild(dwnBtn);
            divCards.appendChild(sizeBtn);
            divCards.appendChild(title);
            divCards.appendChild(userName);
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

        
        
        
    }
 
    asignarFavs();
 
 
}).catch(err => {
    console.log("error", err);
})

btnR.addEventListener('click', () => {
    gifTrendingCtn.scrollLeft += 400;
})

btnL.addEventListener('click', () => {
    gifTrendingCtn.scrollLeft -= 400;
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
    console.log(err)
});





//Funcion agrandar gif
function expandGif(prueba, url, title, user) {
    prueba.addEventListener('click', () => {
       let imgBg = document.createElement("div");
       imgBg.setAttribute("id", "imgBg");
       imgBg.style.position = "fixed";
       imgBg.style.background = "#fff"; 
       imgBg.style.width = "100%";
       imgBg.style.height = "100%";
       imgBg.style.zIndex= "10";
       imgBg.style.top = "0";
       body.appendChild(imgBg);


      let imgGif = document.createElement("img");
      imgGif.setAttribute("src", url); 
      
      
      imgGif.style.position = "fixed";
      imgGif.style.width = "30%";
      imgGif.style.marginLeft = "500px";
      imgGif.style.marginTop = "200px"
      imgGif.style.zIndex = "12";   
      imgBg.appendChild(imgGif);

      let cross = document.createElement("button");
      cross.setAttribute("class", "fas fa-times suggCross");
      cross.style.paddingLeft = "1000px"
      cross.style.position = "fixed";
      cross.style.zIndex = "11"; 
      imgBg.appendChild(cross);  
      cross.addEventListener('click', () => {
          imgBg.style.visibility = "hidden";
      })

      
      btnR.setAttribute("id", "arrowRight")
      btnR.setAttribute("class", "fas fa-chevron-right");
      btnR.style.zIndex = "11";
      imgBg.appendChild(btnR);
      
      
      btnL.setAttribute("id", "arrowRight")
      btnL.setAttribute("class", "fas fa-chevron-left");
      btnL.style.zIndex = "11";
      imgBg.appendChild(btnL);  

      let titleExp = document.createElement("p");
      titleExp.textContent = title;
      titleExp.style.zIndex = "11";
      titleExp.style.color = "#000";
      titleExp.style.fontSize = "16px"
      imgBg.appendChild(titleExp);

      let userExp = document.createElement("p");
      
      userExp.style.zIndex = "11";
      userExp.style.color = "#000";
      userExp.style.fontSize = "16px";
      imgBg.appendChild(userExp);

      if ( userExp == undefined) {
        userExp.textContent = "Usuario anonimo"
      } else {
        userExp.textContent = user;
      }

      let likeExp = document.createElement("button");
      likeExp.setAttribute("class", "fas fa-heart likeExp");
      
      
      imgBg.appendChild(likeExp);

      let dwnExp = document.createElement("button");
      dwnExp.setAttribute("class", "fas fa-download dwnExp");
      dwnExp.style.zIndex = "11";
      imgBg.appendChild(dwnExp);


    })

}
