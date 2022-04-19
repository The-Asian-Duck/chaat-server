var express = require('express');
var app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('chaat server');
});

app.route('/send')
.post(function(req, res) {
    const query = req.query
    console.log(query.message)
    res.send('successfully sent http post');
})

app.listen(port, function () {
    console.log('chaat node js server listening on port 3000.');
});