// imporing the Comment model to use
const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = function(req, res){
    Post.findById(req.body.post, function(err, post){

        if (post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(err, comment){
                // handle error

                post.comments.push(comment);
                post.save();

                res.redirect('/');
            });
        }

    });
}

module.exports.destroy = function(req, res){
    //finding the comment to delete
    Comment.findById(req.params.id, function(err, comment){
        //checking the user 
        if (comment.user == req.user.id){
            // storing the comment-post refference to delete it from the post-comments array as well 
            let postId = comment.post;
            //removing the comment in the
            comment.remove();
            // finding by id and updating by removing/pulling the 
            Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}}, function(err, post){
                return res.redirect('back');
            })
        }else{
            return res.redirect('back');
        }
    });
}
