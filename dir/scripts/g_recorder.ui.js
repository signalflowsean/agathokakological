/* global $ */ 
'use strict'

const gestureRecorderUI = () => { 
  const render = () => { 
    let html = ''; 
    switch(store.currState) { 
      case 'ready': 
        //show add gesture button
        html = generateReadyStateHTML();
        break;
      case 'naming': 
        html = generateNamingStateHTML(); 
        //add gesture name input field
        //add gesture name submit button
        break; 
      case 'counting-down': 
        html = generateCountingDownStateHTML(); 
        //show countdown
        break; 
      case 'recording': 
        html = generateRecordingStateHTML(); 
        //showing recording
        break; 
    }; 

    $('#gesture-recorder').html(html); 
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