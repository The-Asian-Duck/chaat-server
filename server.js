var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.send('chaat server');
});

app.route('/send')
.post(function(req, res) {
    const { username, msgString } = req.body;

    console.log({username, msgString})
    res.send({username, msgString});
})
.get(function(req, res) {
    const bodyContent = req.body
    console.log(bodyContent)
    res.send('successfully sent http get');
})

app.listen(port, function () {
    console.log('chaat node js server listening on port 3000.');
});