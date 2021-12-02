import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

var User = mongoose.model('users', UserSchema);

export default User;