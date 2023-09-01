const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/api/post');



// GET feed
router.get('/post', postCtrl.index);
// get post
router.get('/post/:id', postCtrl.show);
// get new post
router.post('/post/new',postCtrl.createPost)
module.exports = router;
