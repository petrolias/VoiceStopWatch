var Vsw = {
    _startTime: null,
    _miliseconds: 0,
    _getFormatedTime: function (s) {
        s = Vsw._miliseconds + Vsw._getTimeEllapsed();
        // Pad to 2 or 3 digits, default is 2
        function pad(n, z) {
            z = z || 2;
            return ('00' + n).slice(-z);
        }

        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;

        return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
    },
    _intervalVar: null,
    _intervalStart: function () {
        this._startTime = new Date();
        clearInterval(this._intervalVar)
        this._intervalVar = setInterval(function () {
            Vsw._setTimerText(Vsw._getFormatedTime());
        }, 1);
    },
    _getTimeEllapsed: function () {
        var timeDiff = new Date().getTime() - this._startTime.getTime();
        return timeDiff;
    },
    _intervalStop: function () {
        clearInterval(this._intervalVar);
        this._intervalVar = null;
        Vsw._miliseconds += Vsw._getTimeEllapsed();
    },
    _setTimerText: function (time) {
        $('#timer').text(time);
    },
    _setLoggerText: function (time) {
        $('#logger').append('<br/>' + time);
    },
    _initText: function (time) {
        this._setTimerText('00:00:00.000');
        $('#logger').text('');
    },
    log: function () {
        this._setLoggerText(Vsw._getFormatedTime());
    },
    start: function () {
        if (this._intervalVar == null) {
            this._intervalStart();
            return;
        }
        this._intervalStop();
    },
    pause: function () {
        this._intervalStop();
    },
    clear: function () {
        this._miliseconds = 0;
        this._startTime = new Date();
        this._intervalStop();
        this._initText();
    }
}