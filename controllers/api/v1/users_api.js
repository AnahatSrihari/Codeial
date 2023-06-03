// require the user and the jsonwebtoken
const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

// whenever a username and password is received
// find the user and generate the JSON web token for that
module.exports.createSession = async function(req, res){

    try{
        let user = await User.findOne({email: req.body.email});

        if (!user || user.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }
        //if the user is found then return the JSON file
        return res.json(200, {
            message: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                //token that expires in 100000 milli-sec 
                //which also get encrypted to the header
                token: jwt.sign(user.toJSON(), 'codeial', {expiresIn:  '100000'})
            }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}
