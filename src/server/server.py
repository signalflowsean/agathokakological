import os
from flask import Flask
app = Flask(__name__)

@app.route("/app/folder")
def createFolder():
    # detect the current working directory and print it
    path = os.getcwd()  
    return ("The current working directory is %s" % path)  

@app.route("/app/recording/start")
def startRecording(): 
    return "start recording"

@app.route("/app/recording/stop")
def stopRecording(): 
    return "stop recording"