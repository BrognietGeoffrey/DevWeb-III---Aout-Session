const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

//initialize the app
const app = express();

// Middlewares

// Form Data MiddleWare
app.use(bodyParser.urlencoded({
    extended: false
}))

// Json body MiddleWare
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Use the passport Middleware
app.use(passport.initialize());
// Bring the Passport Strategy
require('./config/passport')(passport);

// Setting up the static directory
app.use(express(path.join(__dirname, 'public')));

// Bring in the Database Config and connect with the database
const db = require('./config/keys').mongoURI
mongoose.connect(db, {
    useNewUrlParser:true
}).then(() => {
    console.log(`Database connected success ${db}`)
}).catch(err => {
    console.log(`Enable to connect the database ${err}`)
});

/*
app.get('/', (req, res) => {
    return res.send ("<h1>Hello wrld</h1>")
})
*/

// Bring the Users route
const users = require('./routes/api/users');
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})