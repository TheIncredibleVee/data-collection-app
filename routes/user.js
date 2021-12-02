import express from 'express';

import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/register', createUser);
router.post('/login', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;