'use strict'

const fileSaver = (() => { 
  const createFolder = (folderName) => { 
    const folder = { folderName }
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
          "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(folder), // body data type must match "Content-Type" header
  })
  .then(response => response.json()); // parses JSON responce
  }; 

  const startRecording = () => { 

  }; 

  const stopRecording = () => { 

  }; 

  return { createFolder, startRecording, stopRecording }

})(); 