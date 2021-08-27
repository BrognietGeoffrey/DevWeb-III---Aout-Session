if(process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI : "mongodb+srv://Geoffrey:dbGeoffrey@hackatlon.eg6zb.mongodb.net/Hackatlon?retryWrites=true&w=majority"
    }
}

module.exports = {
    mongoURI : "mongodb://localhost:27017/dashboard_hackatlon",
    secret : "mdpsecret"
};