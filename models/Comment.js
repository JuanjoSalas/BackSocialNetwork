const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const CommentSchema = new mongoose.Schema({
    body: {
        type: String,
        required: [true, 'Please enter a comment'],
    },
    PostId: {
        type: ObjectId,
        ref: 'Post'
    },
    UserId: {
        type: ObjectId,
        ref: 'User'
    },
    LikeIds: [{
        UserId: { type: ObjectId, ref: 'User' },
    }],
}, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;