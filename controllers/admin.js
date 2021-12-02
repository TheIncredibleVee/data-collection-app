import bcrypt from 'bcrypt';
import Admin from '../models/admin.js';
import express from 'express';
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'djsldfsakjakjdsafdfdfa';


const router = express.Router();

export const getAdmins = (req, res) => {
    Admin.find({}, (err, admins) => {
        if (err) {
            res.send(err);
        }
        res.json(admins);
    });
};

export const getAdmin = (req, res) => {
    

    const {email, password} = req.body;
    Admin.findOne({email}, (err, admin) => {
        if (err) {
            res.send(err);
        }
        if (admin) {
            bcrypt.compare(password, admin.password, (err, result) => {
                if (err) {
                    res.send(err);
                }
                if (result) {
                    const token = jwt.sign({
                        email: admin.email,
                        adminId: admin._id
                    }, SECRET_KEY, {
                        expiresIn: '7d'
                    });
                    res.json({status: 'ok', name:admin.name, email:admin.email, token:token});
                } else {
                    res.status(202).send('Wrong password');
                }
            });
        } else {
            res.status(210).send('Admin not found');
        }
    });
};


export const createAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newAdmin = await new Admin({
        name,
        email,
        password: hash,
    });
    newAdmin.save((err, admin) => {
        if (err) {
            res.send(err);
        }
        res.json(admin);
    });
};

export const deleteAdmin = async (req, res) => {
    const { id } = req.params;
    Admin.findByIdAndDelete(id, (err, admin) => {
        if (err) {
            res.send(err);
        }
        res.json(admin);
    });
}


export default router;

