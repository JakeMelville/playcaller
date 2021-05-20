import mongoose from 'mongoose';

const postSchema = mongoose.schema({
    title: String,
    message: String,
    creator: String
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;