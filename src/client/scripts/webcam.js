/* global $ */ 
'use strict'

const webcam = (() => { 
  function load() { 
    const webcam =  document.getElementById('webcam'); 

    if(navigator.mediaDevices.getUserMedia) { 
      navigator.mediaDevices.getUserMedia({video : true})
        .then(stream => webcam.srcObject = stream)
        .catch(err => console.error('Loading camera: ', err)); 
    }
  }; 

  return { load };
})(); 