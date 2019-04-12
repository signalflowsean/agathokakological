from flask import Flask
app = Flask(__name__)

@app.route("/app/folder")
def createFolder():
    return "creating a new folder"

@app.route("/app/recording/start")
def startRecording(): 
    return "start recording"

@app.route("/app/recording/stop")
def stopRecording(): 
    return "stop recording"