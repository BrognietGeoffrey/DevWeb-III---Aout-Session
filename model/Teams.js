const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create the Teams Schemae

const TeamsSchema = new schema ({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = User =mongoose.model('users', UserSchema);