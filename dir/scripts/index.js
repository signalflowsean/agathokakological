const webcam = document.getElementById('webcam');

if(navigator.mediaDevices.getUserMedia) { 
  navigator.mediaDevices.getUserMedia({video : true})
    .then(stream => webcam.srcObject = stream); 
}