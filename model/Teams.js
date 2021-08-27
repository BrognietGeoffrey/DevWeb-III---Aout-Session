/**
 * Fichier pour la création de la collection des équipes dans MongoDB
 * Files for the creation of collection Teams in MongoDB
 */
const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Create the Teams Schema

const TeamsSchema = new schema ({
    name : {
        type : String,
        required : true
    },
    members : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = Teams =mongoose.model('teams', TeamsSchema);