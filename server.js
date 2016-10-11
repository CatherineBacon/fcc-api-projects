var path = require('path');
var express = require('express');

var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

var getNaturalDate = function(s) {
    var day = s.getDate();
    var monthNumber = s.getMonth();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var monthName = months[monthNumber]
    var year = s.getFullYear()
    return `${monthName} ${day}, ${year}`;    
}

var dateFromString = function(s) {
    var n = parseInt(s);
    var date;
    if(Number.isNaN(n)) {
        date = new Date(s);
    } else {
        date = new Date(n);
    }
    
    if(date=='Invalid Date') {
        return { unix: null, natural: null} ;
    } else {
        var unixDate = date.getTime();
        var naturalDate = getNaturalDate(date);
        return { unix: unixDate, natural: naturalDate} ;
    }
}

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/:date', function(req, res) {
    var dateInput = req.params.date;   
    res.json( dateFromString(dateInput) );
    res.end();
});

var port = process.env.PORT || 1337;

app.listen(port);

module.exports = {
    getNaturalDate: getNaturalDate,
    dateFromString: dateFromString
};
