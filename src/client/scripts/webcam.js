/* global $ */ 
'use strict'

const webcam = (() => { 
  function load() { 
    const webcam = $('#webcam');
    
    if(navigator.mediaDevices.getUserMedia) { 
      navigator.mediaDevices.getUserMedia({video : true})
        .then(stream => webcam.srcObject = stream); 
    }
  }; 

  return { load };
})(); 