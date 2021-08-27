/**
 * Fichier pour la création de la collection des utilisateurs dans MongoDB
 * Files for the creation of collection Users in MongoDB
 */
const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create the User Schema

const UserSchema = new schema ({
    name : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = User =mongoose.model('users', UserSchema);