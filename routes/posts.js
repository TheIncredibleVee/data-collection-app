import express from 'express';

import { getPosts, getPost, createPost, updatePost, getUserPosts, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/create', createPost);
router.post('/', getUserPosts);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;