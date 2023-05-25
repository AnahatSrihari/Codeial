//importing the "user" model from model folder
const User = require('../models/user')

//this is a action for profile
module.exports.profile = function(req ,res){
   // return res.end('<h1> User profile Controller 2 </h1>');

    res.render('users_profile',{
        title:"users"
    })
}


//action to render the user sign up page
module.exports.signUp = function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up',{
        title:" Codeial | Sign-UP"
    });
}


//action to render the user sign in page
module.exports.signIn = function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in',{
        title:" Codeial | Sign-IN"
    });
}
    

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
    //when session is created and auth done the user is redirected to home page
}