const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
//helps in extracting JWT from the header
const ExtractJWT = require('passport-jwt').ExtractJwt;

//importing the user from the models for the auth and finding user
const User = require('../models/user');

//extraction and decryption using the secretOrKey
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'codeial'
}

// tell passport to use JWT strategy
// and in that a call back function that reads the data from the JWT patload
passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    //find the user on the basis of the payload
    User.findById(jwtPayLoad._id, function(err, user){
        if (err){console.log('Error in finding user from JWT'); return;}

        if (user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })

}));

module.exports = passport;

