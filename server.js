require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Flight = require('./models/Flight');

const app = express();

// ==== Configuration
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// ===== Middleware
// Setting a middleware is a function execute for all routes
app.use((req, res, next) => {
    console.log(req.url)
    next()
})


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Airlines.com</h1>");
})

/**
 * Index Route: (return a list of flights)
 */
app.get('/flights', (req, res) => {
    // res.send(flights)
    //res.render('flights/Index', {flights: flight})
    Flight.find({}, (error, allFlights) => {
        res.render('Index', {flight: allFlights})
    })
})

/**
 * POST method (accept data from the form)
 */
app.post('/flights', (req, res) => {
    console.log(req.body);
    Flight.create(req.body, (error, createdFlight) => {
        //res.send(createdFlight)
        res.redirect('/flights')
    })

})

app.get('/flights/new', (req, res) => {
    res.render('New')
})


app.listen(3000, () => {
    console.log(`Server running on  port: 3000`);
    // gets the warning message out
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})