/* global $ */ 
'use strict'

const gestureRecorderUI = (() => { 
  const render = (html = '') => { 
    $('#gesture-recorder').html(html); 
  }; 

  const generateReadyStateHTML = () => { 
    render("<button id='js-add-gesture' class='js-add-gesture'>+</button>"); 
  };

  const generateNamingStateHTML = () => { 
    render("<input type='text' id='js-gesture-name'class='js-add-gesture'></input>" + 
    "<input type='submit' id='js-gesture-name-submit' class='js-add-gesture js-submit'></input>"); 
  }; 


  const generateCountingDownStateHTML = (num) => { 
    if (num < 0) { 
      generateRecordingStateHTML(); 
      return;
    } 

    render(`<h2>${num}</h2>`);
    setTimeout(generateCountingDownStateHTML, 1000, (num-1)); 
  }; 

  const generateRecordingStateHTML = () => { 
    return 'recording'; 
  }; 

  const getGestureNameFromElement = (item) => {
    return $(item).find('#js-gesture-name').val();     
  }

  const handleNewGestureClick = () => { 
    $('#gesture-recorder').on('click', '#js-add-gesture', e => { 
      store.currState = 'naming'; 
      generateNamingStateHTML(); 
      return; 
    }); 
  }; 

  const handleNewGestureSubmit = () => { 
    $('#gesture-recorder').on('submit', e => { 
      e.preventDefault(); 
      store.gestures.push(getGestureNameFromElement(e.currentTarget)); 
      store.currState = 'counting-down'; 
      generateCountingDownStateHTML(5); 
      return; 
    }); 
  }; 

  const bindEventListeners = () => { 
    handleNewGestureClick(); 
    handleNewGestureSubmit(); 
  }; 

  return { render, bindEventListeners, generateReadyStateHTML }; 
})(); 