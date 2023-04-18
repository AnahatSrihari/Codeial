module.exports.home = function(req ,res){
    //return res.end('<h1> Express is up for Codeial</h1>');

    console.log(req.cookies);
    res.render('home',{
        title:"home"
    })
}

