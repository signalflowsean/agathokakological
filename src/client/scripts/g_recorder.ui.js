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
      generateRecordingStateHTML(constants.recordLength); 
      return; 
    } 


    renderCountDownHTML(generateCountingDownStateHTML, 'js-count-down', num); 
  }; 

  const renderCountDownHTML = (countDownType, className, num) => { 
    render(`<h2 class=${className}>${num}</h2>`);
    setTimeout(countDownType, constants.countDownSpeed, (num-1)); 
  }; 



  const generateRecordingStateHTML = (num) => { 
    if (num < 0) { 
      generateReadyStateHTML(); 
      return; 
    }
    
    renderCountDownHTML(generateRecordingStateHTML, 'js-recording', num); 
  }; 

  const getGestureNameFromElement = (item) => {
    return $(item).find('#js-gesture-name').val();     
  }

  const handleNewGestureClick = () => { 
    $('#gesture-recorder').on('click', '#js-add-gesture', e => { 
      store.currState = 'naming'; 
      generateNamingStateHTML(); 
    }); 
  }; 

  const handleNewGestureSubmit = () => { 
    $('#gesture-recorder').on('submit', e => { 
      e.preventDefault(); 
      store.gestures.push(getGestureNameFromElement(e.currentTarget)); 
      store.currState = 'counting-down'; 
      generateCountingDownStateHTML(constants.countDownLength); 
    }); 
  }; 

  const bindEventListeners = () => { 
    handleNewGestureClick(); 
    handleNewGestureSubmit(); 
  }; 

  return { render, bindEventListeners, generateReadyStateHTML }; 
})(); 