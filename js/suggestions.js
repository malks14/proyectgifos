
const suggTerm = document.getElementById('autocomplete');
const suggCross = document.getElementById('suggCross');



function sugg() {
    async function suggestions(sugerencia) {
        const searchInput = document.getElementById('search-input').value;
        const pathTerm = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apikey}&q=${sugerencia}`;
        console.log(pathTerm);
        const resp = await fetch(pathTerm);
        const info = await resp.json();
     
        return info;
        
    }
    
    let info = suggestions(searchInput.value)
    info.then(data => {
        
        console.log(data)
            suggTerm.innerHTML = "";
            arrayAutoComplete = [];
            for(i = 0 ; i  < 4; i++) {
                
                let search1 = document.createElement("i");
                search1.setAttribute("class", "fas fa-search");
                
                search1.style.color = "#572EE5";
                
                let br = document.createElement("br");


                let div = document.createElement("div")
                
               
                div.style.width = "300px";
                div.style.borderTop = "1px solid #9CAFC3";
                div.style.opacity = "0.5";
                div.style.marginLeft = "20px";
                div.style.paddingTop = "10px";
                div.style.height = "0.5px";

                let p = document.createElement("p");
                p.textContent = data.data[i].name;
                p.style.overflow - "hidden";
                p.style.cursor = "pointer";
                p.style.width = "100%";
                p.style.color = "#000";
                p.style.fontFamily = "Roboto-Regular";
                p.style.fontSize = "16px";
                p.style.position = "relative";
                

                suggTerm.appendChild(div);
                suggTerm.appendChild(search1)
                arrayAutoComplete.push(p);
                p.appendChild(br);
                div.appendChild(p)
                p.addEventListener("click", () => {
                    suggTerm.innerHTML = "";
                    searchForm.style.height = "50px";
                    document.getElementById("search-input").value = data.data[i].name;
                    document.getElementById("searchTerm").textContent = data.data[i].name;
                    search();
                    showButton();
                    
                  });
        
            }
            
            
       
    }).catch(err => {
        console.log("error", err);
    })
    
}
suggCross.addEventListener("click", () => {
    searchForm.style.height = "50px";
    searchInput.value = "";
});

searchInput.addEventListener("input", () => {
    searchForm.style.height = "200px";
    if (document.getElementById("suggCross").classList.contains("hide")) {
        document.getElementById("suggCross").classList.remove("hide");
      }
      searchForm.style.height = "200px";
    sugg()
});
