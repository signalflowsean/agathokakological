/* global $ */
'use strict'

$(() => { 
  webcam.load(); 
  gestureRecorderUI.bindEventListeners(); 
  gestureRecorderUI.render(); 
  gestureRecorderUI.generateReadyStateHTML(); 
}); 
