let canvas = document.querySelector("#canvas");
let context = canvas.getContext('2d');//donde se va a poner la foto y en 2 dimensiones
let video = document.querySelector("#video");
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) { // el primero busca si hay mediadevices disponibles lo segundo es lo que hace pedir permiso?
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => { //getusermedia es el tipo de media que se precisa
        //.then  (callback function)es porque es asincrono stream proque es lo que se busca del media object
        video.srcObject = stream; //el stream es del .then y 
        video.play();//hace que se ponga en el sitio
    });
}

//funcion foto
document.getElementById('snap').addEventListener('click', () => {
    context.drawImage(video, 0,0,640,480);//video porque queremos que saque como un screen del video, lo otro es coordenadas (0,0)
})
//drawimage porque es un metodo que pide que se dibuje una imagen, en este caso del video, al canvas(context)



//funcion extra para ver devices
// navigator.mediaDevices.enumerateDevices().then((devices) => {
//     console.log(devices)
// })
