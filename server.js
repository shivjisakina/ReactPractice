var express = require('express');
var path = require('path');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ReactExample');

const db = mongoose.connection;

db.on('error', function (err) {
    console.log('Mongoose Error: ', err);
});

db.once('open', function () {
    console.log('Mongoose connection successful.');
});

var Person = require('./models/Person');
var People = require("./models/People.js")



var app = express();

var bodyParser = require('body-parser');


app.use(express.static('public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}));
app.use(bodyParser.text());
app.use(bodyParser.json());

//app.use('/', routes);

app.post('/formsubmit', function (req, res) {

    console.log(req.body.firstname)
    console.log(req.body.lastname)

    People.insertMany({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })

})

app.get('/getpeople', function (req, res) {

    People.find().exec(

        function (err, result) {

            if (err) {
                res.json(err)
            } else {
                res.json(result)
            }

        }
    )


})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('database operation on port: ' + PORT);
});