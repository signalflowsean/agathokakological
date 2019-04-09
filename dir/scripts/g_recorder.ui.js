/* global $ */ 
'use strict'

const gestureRecorderUI = () => { 
  const render = () => { 
    switch(store.currState) { 
      case 'ready': 
        //hide recording
        //show add gesture button
        break;
      case 'naming': 
        //hide gesture button
        //add gesture name input field
        //add gesture name submit button
        break; 
      case 'counting-down': 
        //hide gesture name input field
        //hide gesture name submit button
        //show countdown
        break; 
      case 'recording': 
        //hide countdown
        //showing recording
        break; 
    }

  }; 

  const getGestureNameFromElement = (item) => {
    const name = $(item).closest('#js-gesture-name').input(); 
    return name; 
  }

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