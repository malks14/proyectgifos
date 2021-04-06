// if (myGifsArray.length !=0) {
//     displayMyGifs();
//   } else {console.log("vacio")
// }

// getMyGifsId();
// async function getMyGifsId(offset) {
//     if (listado_misgifos.length > 0) {
//         const pathVideo = `https://api.giphy.com/v1/gifs?ids=${listado_misgifos.toString()}api_key=${apikey}&offset=${offset}`;
//         let gifsMios = await logFetch(pathVideo)
//         if (gifsMios.data.length > 0) {
//             for (let i = 0; i < gifsMios.data.length; i++){
//                 console.log(json.data)
//                 let divMygfs = document.createElement("div")
//                 ctn_my_gif.appendChild(divMygfs);
//                 let imgMyGif = document.createElement('img');
//                 imgMyGif.setAttribute("src", json.data.url)
//                 divMygfs.appendChild(imgMyGif);
//             }
//         }
//     }

// }
   
// async function displayMyGifs() {
//      let my_gif = await getMyGifsId();
//      console.log(my_gif)
//      for(i = 0; i < 12; i++) {
//        if(my_gif[i]===undefined){break;}
//        let my_gifs = my_gif[i];
//         let divMygfs = document.createElement("div");
//         let imgMyGif = document.createElement('img');
//         ctn_my_gif.appendChild(divMygfs);
//         divMygfs.appendChild(imgMyGif);
//         imgMyGif.src = my_gifs.images.original.url;
//     }
// }




//otra manera
// const pathgifs = `https://api.giphy.com/v1/gifs/?ids=${ids}api_key=${apikey}`
// const data = await response.json()
// return data.data;
   

  