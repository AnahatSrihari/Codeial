//module.exports.posts = function(req ,res){
// return res.end('<h1> User Post - Controller </h1>');
//}

const Post = require('../models/post');
// Importing the comments form models to check and delete it
const Comment = require('../models/comment');


module.exports.create = async function(req, res){
    try{
        await Post.create({
            content: req.body.content,
            user: req.user._id
        });
    
        return res.redirect('back');

    }catch(err){
        console.log('Error', err);
        return;
    }
  
}


module.exports.destroy = async function(req, res){

    try{
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id){
            post.remove();

            await Comment.deleteMany({post: req.params.id});
            return res.redirect('back');
        }else{
            return res.redirect('back');
        }

    }catch(err){
        console.log('Error', err);
        return;
    }
    
}
