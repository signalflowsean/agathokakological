/* global $ */ 
'use strict'

const gestureRecorderUI = () => { 
  const render = () => { 

  }; 

  const handleNewGestureClick = () => { 
    $('#js-add-gesture').on('click', e => { 
      e.preventDefault(); 
      store.currState = 'naming'; 
    }); 
  }; 

  const handleNewGestureSubmit = () => { 
    $('#js-submit-gesture').on('submit', e => { 
      e.preventDefault(); 
      store.gestures.push(getGestureNameFromElement(e.currentTarget)); 
      store.currState = 'counting-down'; 
    }); 
  }; 

  const bindEventListeners = () => { 
    handleNewGestureClick(); 
    handleNewGestureSubmit(); 
  }; 

  return { render, bindEventListeners }; 
}; 