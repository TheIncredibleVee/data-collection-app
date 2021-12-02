import express from 'express';

import { getAdmins, getAdmin, createAdmin, deleteAdmin } from '../controllers/admin.js';

const router = express.Router();

router.get('/', getAdmins);
router.post('/register', createAdmin);
router.post('/login', getAdmin);
router.delete('/:id', deleteAdmin);

export default router;