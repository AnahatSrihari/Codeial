module.exports.profile = function(req ,res){
   // return res.end('<h1> User profile Controller 2 </h1>');

    res.render('users_profile',{
        title:"users"
    })
}

