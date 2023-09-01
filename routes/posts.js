const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/api/post');


// GET feed
router.post('/post/:id', postCtrl.show);
// get new post
router.post('/post/new',postCtrl.create)
