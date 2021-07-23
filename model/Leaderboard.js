const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create the Leaderboard Schemae

const LeaderboardSchema = new schema ({
    username : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    score : {
        type : int,
        required : true
    }
});

module.exports = User =mongoose.model('leaderboard', UserSchema);