const mongoose = require('mongoose');

// Creating Schema for the posts
const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        //referring to the user by using the unique object-id
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
      // include the array of ids of all comments in this post schema itself
      comments: [
        {
            type:  mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        }
    ]

},{
    // it creates 2 fields created-at AND  updated-at
    timestamps: true
});

// tell that it is a model in the DB
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
