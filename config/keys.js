/**
 * Fichier pour la connexion vers la base de données
 * Files for the databases connection
 */
if(process.env.NODE_ENV == 'production'){
    module.exports = {
        mongoURI : "mongodb+srv://Geoffrey:dbGeoffrey@dashboardhackatlon.y8309.mongodb.net/dashboardhackatlon?retryWrites=true&w=majority",
        secret : "dbGeoffrey"
    }
}
else {

module.exports = {
    mongoURI : "mongodb://localhost:27017/dashboard_hackatlon",
    secret : "mdpsecret"
};
}