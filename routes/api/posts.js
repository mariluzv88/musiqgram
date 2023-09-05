const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/api/post');
const ensureLoggedIn = require('../../config/ensureLoggedIn')



// GET feed
router.get('/feed', postCtrl.feed);
// get post
router.get('/:id', postCtrl.showPost);
// create new post
router.post('/new',postCtrl.createPost)
// delete Post
router.delete('/:id/delete',postCtrl.deletePost)
// edit post
router.put('/:id/edit', postCtrl.editPost)
// like Post
router.put('/like')
// comment on post
// add post to playlist
module.exports = router;
