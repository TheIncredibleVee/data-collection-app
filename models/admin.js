import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    name: String,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

var Admin = mongoose.model('admins', AdminSchema);

export default Admin;