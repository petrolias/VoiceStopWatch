//https://codeburst.io/html5-speech-recognition-api-670846a50e92
var VswCommands = {
    _commandEvent: function (command) {
        command = command.toLowerCase();
        switch (command) {
            case 'start':
            case 'ξεκίνα':
            case 'pause':
            case 'παύση':
                Vsw.start();
                break;
            case 'stop':
            case 'σταμάτα':
            case 'clear':
            case 'καθάρισε':
            case 'καθαρισμός':
                Vsw.clear();
                break;
            case 'log':
                Vsw.log();
                break;
            default:
        }
    }
}