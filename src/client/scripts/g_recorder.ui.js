/* global $ */ 
'use strict'

const gestureRecorderUI = (() => { 

  const render = () => { 
    console.log('curr', store.currState); 
    let html = ''; 
    switch(store.currState) { 
      case 'ready': 
        html = generateReadyStateHTML();
        break;
      case 'naming': 
        console.log('naming');  
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

  const generateReadyStateHTML = () => { 
    return "<button id='js-add-gesture'>+</button>"; 
  };
  const generateNamingStateHTML = () => { 
    console.log('yoo')
    return "<input><input>" 
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