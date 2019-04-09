/* global $ */ 
'use strict'

const gestureRecorderUI = (() => { 

  const render = () => { 
    let html = ''; 
    switch(store.currState) { 
      case 'ready': 
        html = generateReadyStateHTML();
        break;
      case 'naming': 
        html = generateNamingStateHTML(); 
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

  const generateReadyStateHTML = () => { 
    return "<button id='js-add-gesture' class='js-add-gesture'>+</button>"; 
  };

  const generateNamingStateHTML = () => { 
    return "<input type='text' id='js-gesture-name' class='js-add-gesture'><input>" 
  }; 


  const generateCountingDownStateHTML = () => { 
    return 'counting'; 
  }; 

  const generateRecordingStateHTML = () => { 
    return 'recording'; 
  }; 

  const getGestureNameFromElement = (item) => {
    const name = $(item).closest('#js-gesture-name').input(); 
    return name; 
  }

  const handleNewGestureClick = () => { 
    $('#gesture-recorder').on('click', '#js-add-gesture', e => { 
      store.currState = 'naming'; 
      render(); 
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
})(); 