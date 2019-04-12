import os
from flask import Flask
app = Flask(__name__)

@app.route("/app/folder")
def createFolder():
    # detect the current working directory and print it
    path = os.getcwd() + "/training-data"
    try:  
      os.mkdir(path)
    except OSError:  
      print ("Creation of the directory %s failed" % path)
    else:  
      print ("Successfully created the directory %s " % path)
    return ("The current working directory is %s" % path)  

@app.route("/app/recording/start")
def startRecording(): 
    return "start recording"

@app.route("/app/recording/stop")
def stopRecording(): 
    return "stop recording"