import bcrypt from 'bcrypt';
import User from '../models/user.js';
import express from 'express';
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'djslfakjdsafdfdfa';


const router = express.Router();

export const getUsers = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }
        res.json(users);
    });
};

export const getUser = (req, res) => {
    

    const {email, password} = req.body;
    User.findOne({email}, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.send(err);
                }
                if (result) {
                    const token = jwt.sign({
                        email: user.email,
                        userId: user._id
                    }, SECRET_KEY, {
                        expiresIn: '7d'
                    });
                    res.json({status: 'ok', name:user.name, email:user.email, token:token});
                } else {
                    res.status(202).send('Wrong password');
                }
            });
        } else {
            res.status(210).send('User not found');
        }
    });
};


export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await new User({
        name,
        email,
        password: hash,
    });
    newUser.save((err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    User.findByIdAndUpdate(id, {
        name,
        email,
        password: hash,
    }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
}


export default router;




// app.post('/api/login', async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//   })
  
//   app.post('/api/register', async (req, res) => {
//     const { name, email, password } = req.body;
//     const pass= await bcrypt.hash(password, 10);
  
//     try{
//         const newUser = new User({ name, email, password: pass });
//         await newUser.save();
//     }
//     catch(err){
//       res.status(400).send(err);
//     }
//   })