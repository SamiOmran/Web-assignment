const express = require('express');
const app = express()
const MongoClient = require('mongodb').MongoClient
const bodyparser = require('body-parser')
const calenderRouter = require('./routes/calender');

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs')
app.use(express.static("public"));

const path = 'mongodb://localhost:27017';

app.get('/', (req, res) => {
    MongoClient.connect(path, { useUnifiedTopology: true }, (err, client) => {
        const db = client.db('zajel');

        db.collection('attendance').find({}).toArray((err, attendance) => {
            if (err)
                console.log("faild to connect");
            else {
                console.log('connected')
                res.render('index_sami', { attendance: attendance })
            }
        })
    })
});

app.get('/events/new_noha', (req, res) => {
    res.render('events/new_noha')
})
app.get('/calender', (req, res) => {
    res.render('events/index_noha')
});

app.post('/saved', function (req, res) {

    // make client connect to mongo service
    MongoClient.connect(path, { useUnifiedTopology: true }, function (err, client) {
        const db = client.db('zajel');

        // document to be inserted
        var doc = {
            date: req.body.date,
            name: req.body.name,
            Stime: req.body.Stime,
            Etime: req.body.Etime,
            tage: req.body.tage
        };
        // insert document to 'users' collection using insertOne
        db.collection("calendar").insertOne(doc, function (err, res) {
            if (err) Console.log("Data is not inserted");
        });
    });
    res.render("events/index_noha");
})


const port = 4000;
app.listen(port, (req, res) => {
    console.log('Server is running on port: ', port)
})


