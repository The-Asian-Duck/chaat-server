const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
//For https
const https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('ssl/private.key'),
  cert: fs.readFileSync('ssl/certificate.crt')
};

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



http.createServer(app).listen(80)
https.createServer(options, app).listen(443);