let videoCam = document.getElementById('snap');
let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let start = document.getElementById('start');
let detail = document.getElementById('detail');
let center = document.getElementById('greenBox');
let division = document.getElementById('division');

let tiempoRepetir = document.createElement("h6");
center.appendChild(tiempoRepetir);
tiempoRepetir.setAttribute("id", "tiempo-repetir");

function cronometrar() {
    h = 0;
    m = 0;
    s = -1;
    tiempoRepetir.innerHTML = "00:00:00";
  
    escribir();
    id = setInterval(escribir, 1000);
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


videoCam.addEventListener('click', (startVideo) =>  {
    videoCam.style.visibility = "hidden";
    step1.classList.add("hoverStep");
    start.innerHTML = "Nos das acceso a tu cámara?";
    detail.innerHTML = "El acceso a tu camara será válido sólo <br /> por el tiempo en el que estés creando el GIFO.";
    startVideo();
    
    

    let canvas = document.createElement('canvas');
    videoCam.appendChild(canvas);
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
    let captureVideo = document.createElement('video');
    center.appendChild(captureVideo);
    captureVideo.setAttribute("id", "videoGif");
    captureVideo.srcObject = stream;
    captureVideo.play();
    videoCam.style.display = "none";
    tiempoRepetir.style.visibility = "visible";

    let record = document.createElement("h4");
    division.appendChild(record);
    record.setAttribute("id", "btn-record");
    record.setAttribute("class", "start");
    record.textContent = "GRABAR";
    step1.classList.remove("hover");
    step2.classList.add("hover");

    record.addEventListener("click", () => {
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

    })
    
    cronometrar();
    recorder.startRecording();
    record.style.display = "none";
    let stopRecord = document.createElement("h4");
    division.appendChild(stopRecord);
    stopRecord.setAttribute("id", "btn-stop");
    stopRecord.setAttribute("class", "start");
    stopRecord.textContent = "FINALIZAR";
    stopRecord.addEventListener("click", ejecuta);
    
    


    
  })
}

function ejecuta() {
    finalizarGrabacion(stopRecording);
  }
  
function finalizarGrabacion(callback) {
    recorder.stopRecording(callback);
  }
































// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) { // el primero busca si hay mediadevices disponibles lo segundo es lo que hace pedir permiso?
//     navigator.mediaDevices.getUserMedia({video: true}).then((stream) => { //getusermedia es el tipo de media que se precisa
//         //.then  (callback function)es porque es asincrono stream proque es lo que se busca del media object
//         video.srcObject = stream; //el stream es del .then y 
//         video.play();//hace que se ponga en el sitio
//     });
// }

// //funcion foto
// video.addEventListener('click', () => {
//     context.drawImage(video, 0,0,640,480);//video porque queremos que saque como un screen del video, lo otro es coordenadas (0,0)
// })



// let canvas = document.querySelector("#canvas");
// let context = canvas.getContext('2d');//donde se va a poner la foto y en 2 dimensiones
// let video = document.querySelector("#video");

// //drawimage porque es un metodo que pide que se dibuje una imagen, en este caso del video, al canvas(context)



// //funcion extra para ver devices
// // navigator.mediaDevices.enumerateDevices().then((devices) => {
// //     console.log(devices)
// // })
