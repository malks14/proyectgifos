let videoCam = document.getElementById('snap');
let captureVideo1 = document.getElementById('captureVideo1');
let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let start = document.getElementById('start');
let detail = document.getElementById('detail');
let center = document.getElementById('greenBox');
let division = document.getElementById('division');
let recordBtn = document.getElementById('record');
let endVideo = document.getElementById('endVideo');
let upload = document.getElementById('upload');
let snapAgain = document.getElementById('snapAgain');
let savedGif = document.getElementById('savedGif');
let ctn_my_gif = document.getElementById('ctn_my_gifs');
let recorder;
let time;
let blob;

let myGifsArray = [];
let myGifosString = localStorage.getItem("myGifos");
// let listado_misgifos = obtenerListadoGifsGuardados();
// function obtenerListadoGifsGuardados() {
//   return JSON.parse(localStorage.getItem('myGifos'));
// }

let form = new FormData();



//purplescreen
let purpleScreen = document.createElement("div");
let btnCtnP = document.createElement("div");
let textPurple = document.createElement("p");
let spinner = document.createElement("img");
let dwnBtnP = document.createElement("img");
let lnkBtn = document.createElement("img");


//cronometro
let h = 0;
let m = 0;
let s = -1;

let tiempoRepetir = document.createElement("h6");
division.appendChild(tiempoRepetir);
tiempoRepetir.setAttribute("id", "tiempo-repetir");

function cronometrar() {
   
    tiempoRepetir.innerHTML = "00:00:00";
  
    escribir();
    time = setInterval(escribir, 1000);
  }
  function escribir() {
    var hAux, mAux, sAux;
    s++;
    if (s > 59) {
      m++;
      s = 0;
    }
    if (m > 59) {
      h++;
      m = 0;
    }
    if (h > 24) {
      h = 0;
    }
    if (s < 10) {
      sAux = "0" + s;
    } else {
      sAux = s;
    }
    if (m < 10) {
      mAux = "0" + m;
    } else {
      mAux = m;
    }
    if (h < 10) {
      hAux = "0" + h;
    } else {
      hAux = h;
    }
    tiempoRepetir.innerHTML =
      hAux + ":" + mAux + ":" + sAux;
  }


videoCam.addEventListener('click', () =>  {
    videoCam.style.visibility = "hidden";
    step1.classList.add("hoverStep");
    start.innerHTML = "Nos das acceso a tu cámara?";
    detail.innerHTML = "El acceso a tu camara será válido sólo <br /> por el tiempo en el que estés creando el GIFO.";
    record.style.display = "block"

    startVideo();
})

function startVideo() {
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
        height: { max : 480},
    },
  })
  .then(function (stream){
    start.style.display = "none";
    detail.style.display = "none";
    
    
    
    captureVideo1.srcObject = stream;
    captureVideo1.style.width = "716px"
    captureVideo1.style.height = "346px"

    captureVideo1.play();
    videoCam.style.display = "none";
    tiempoRepetir.style.visibility = "visible";
    
        recorder = RecordRTC(stream, {
            type : "gif",
            frameRate : 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted: function () {
                console.log("started");
            }
        })

        
    
  }).catch(err => {
    console.log("error", err);

})
}

recordBtn.addEventListener('click', () => {
  recorder.startRecording();
  recordBtn.style.display = "none";
  snapAgain.style.display = "none";
  endVideo.style.display = "block";
  step1.classList.remove("hoverStep");
  step2.classList.add("hoverStep");
  cronometrar();
 

})

endVideo.addEventListener('click', () => {
  endVideo.style.display = "none";
  upload.style.display = "block";
  snapAgain.style.display = "block";
  tiempoRepetir.style.display = "none";
  recorder.stopRecording(() => {
    blob = recorder.getBlob();
    savedGif.src = URL.createObjectURL(blob);
    savedGif.style.display = "block";
    form.append('file', recorder.getBlob(), "myGif.gif")
    console.log(form.get('file'))
    captureVideo1.style.display = "none";

  });

  clearInterval(time)
  h = 0;
  m = 0;
  s = -1;
  tiempoRepetir.innerHTML = "00:00:00";

})

snapAgain.addEventListener('click', () => {
  upload.style.display = "none";
  recordBtn.style.display = "block";
  recorder.clearRecordedData();
  savedGif.style.display = "none";
  captureVideo1.style.display = "block";
  tiempoRepetir.style.display = "block";
  snapAgain.style.display = "none";
  
  startVideo();
 
})


upload.addEventListener('click', () => {
  upload.style.display = "none";
  step3.classList.add("hoverStep");
  step2.classList.remove("hoverStep");
  snapAgain.style.display = "none";
  
  purpleScreen.setAttribute("class", "purple_screen")
  center.appendChild(purpleScreen)

  
  textPurple.setAttribute("class", "text_screen")
  textPurple.textContent = "Estamos subiendo tu GIFO"
  purpleScreen.appendChild(textPurple);

  
  spinner.setAttribute("src", "./assets/loader.svg");
  spinner.setAttribute("class", "spinner")
  purpleScreen.appendChild(spinner);
  
  subirGif();
  
})



async function subirGif(){


  await fetch(`https://upload.giphy.com/v1/gifs?api_key=${apikey}`,{
          method:'POST',
          body:form,
  })
  .then((res)=> res.json())
  .then(subirsubir=>{
    console.log(subirsubir)
       let myGif = subirsubir.data.id;

        spinner.setAttribute("src", "./assets/ok.svg");
        textPurple.textContent = "GIFO subido con exito!"

       
      dwnBtnP.setAttribute("src", "/assets/icon-download.svg");
      lnkBtn.setAttribute("src", "/assets/icon-link-normal.svg");
      btnCtnP.setAttribute("class", "btnCtnP");
      dwnBtnP.setAttribute("class", "dwnBtnP");
      lnkBtn.setAttribute("class", "lnkBtn");

       btnCtnP.appendChild(dwnBtnP);
       btnCtnP.appendChild(lnkBtn);
        purpleScreen.appendChild(btnCtnP);



       if (myGifosString == null) {
         myGifsArray = [];
       } else {
         myGifsArray = JSON.parse(myGifosString);
       }
       
       myGifsArray.push(myGif)
       myGifosString = JSON.stringify(myGifsArray)
       localStorage.setItem("myGifos", myGifosString);
    
      myGifsArray = JSON.parse(myGifosString); 

  })
  .catch((err)=>{
          console.log(err);
  })
  displayMyGifs()
}

function displayMyGifs() {
  for (i = 0; i < myGifsArray.length; i++) {
    let searchId = myGifsArray[i];
    const pathgifs = `https://api.giphy.com/v1/gifs/?api_key=${apikey}&ids=${searchId}`;
    fetch(pathgifs)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json)
        let divMygfs = document.createElement("div")
        ctn_my_gif.appendChild(divMygfs);
        let imgMyGif = document.createElement('img');
        imgMyGif.setAttribute("src", json.data.url)
        divMygfs.appendChild(imgMyGif);
    })
  }
}


async function pruebax(myGif) {
  dwnBtnP.addEventListener("click", async function () {
    let a = document.createElement("a");
    let response = await fetch(`https:media.giphy.com/media/${myGif}/giphy.gif`);
    let gif = await response.blob();
    a.href = window.URL.createObjectURL(gif);
    a.dataset.downloadurl = [
      "application/octet-stream",
      a.download,
      a.href,
    ].join(":");
    a.click();
  });
}


