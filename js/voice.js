//https://codeburst.io/html5-speech-recognition-api-670846a50e92
var VswVoice = {
    _durationBetweenCommandsInMs: 800,
    _lastEventTimeStamp: new Date(),
    init: function () {
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        let recognition = new window.SpeechRecognition();
        recognition.interimResults = true;
        recognition.maxAlternatives = 0;
        recognition.continuous = true;
        recognition.onresult = (event) => {
            var timeDiff = new Date().getTime() - this._lastEventTimeStamp.getTime();
            // console.log(timeDiff);
            if (timeDiff < this._durationBetweenCommandsInMs) { return; }
            this._lastEventTimeStamp = new Date();
            let i = event.resultIndex;
            let transcript = event.results[i][0].transcript;
            if (!event.results[i].isFinal) {
                var command = VswVoice._getLastWord(transcript);
                // console.log(command);
                VswCommands._commandEvent(command);
            }
        }
        recognition.start();
    },
    _getLastWord: function (words) {
        var n = words.split(" ");
        return n[n.length - 1];
    }
}

VswVoice.init();