const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

//const io = require("socket.io");

//initialize the app
const app = express();
/**
// Chat config server
io.on("connection", socket => {
    socket.emit('loggedIn', {
        users : users.map(s => s.username),
        messages : messages
    });
    socket.on('newuser', username => {
        console.log(`${username} has arrived at the party`);
        socket.username = username;
        users.push(socket);

        io.emit('userOnline', socket.username);

    });
    socket.on('msg', msg => {
        let message = {
            index : index,
            username : socket.username,
            msg : msg
        }
        message.push(message);

        index++
    });
    socket.on("disconnect", () => {
        console.log(`${username} has left the the party`);
        io.emit("userLeft" ,socket.username)
        users.splice(users.indexOf(socket),1);
    });
});*/

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

// Bring the Teams route
const teams = require('./routes/api/teams');
app.use('/api/teams', teams)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
