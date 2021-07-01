const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../model/User');
const key = require('./keys').secret;

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = key;

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, (jwt_payload, done) => {
            User.findById(jwt_payload._id).then(user => {
                if(user) return done(null, user);
                return done(null, false);
            }).catch(err => {
                console.log(err)
            });
        })
    );
};