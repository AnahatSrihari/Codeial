//module.exports.posts = function(req ,res){
// return res.end('<h1> User Post - Controller </h1>');
//}

const Post = require('../models/post');
// Importing the comments form models to check and delete it
const Comment = require('../models/comment');


module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function(err, post){
        if(err){console.log('error in creating a post'); return;}

        return res.redirect('back');
    });
}

module.exports.destroy = function(req, res){
    Post.findById(req.params.id, function(err, post){
        //finding and checking the user is the same who posted the comment
        // .id means converting the object id into string
        if (post.user == req.user.id){
            post.remove();
            //finding and delteing the all posts of the user-id
            Comment.deleteMany({post: req.params.id}, function(err){
                return res.redirect('back');
            });
        }else{
            // if err redirect back to same page
            return res.redirect('back');
        }

    });
}
