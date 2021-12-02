import mongoose from 'mongoose';

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    name: String,
    email: String,
    additionalNotes: String,
    selectedFile: String,
    mainCategory: String,
    subCategory: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    month:{
        type: String,
        default: month[new Date().getMonth()],
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;