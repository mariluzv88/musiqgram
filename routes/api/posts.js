const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/api/post');



// GET feed
router.get('/', postCtrl.index);
// get post
router.get('/:id', postCtrl.show);
// create new post
router.post('/new',postCtrl.createPost)
// like Post
// add post to playlist
module.exports = router;
