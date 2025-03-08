import express from 'express';
import { getAllPosts, getEditPostForm, getNewPostForm, updatePost, deletePost, createPost } from '../Controllers/PostControllers.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/new', getNewPostForm);
router.post('/new', createPost);
router.get('/edit/:id', getEditPostForm);
router.put('/edit/:id', updatePost);
router.delete('/delete/:id', deletePost);

export default router;