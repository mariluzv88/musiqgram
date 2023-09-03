const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// create user
router.post('/', usersCtrl.create);
// user login
router.post('/login', usersCtrl.login);
// user validate
router.get('/check-token', usersCtrl.checkToken);
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// update user
router.put('/:id/edit', usersCtrl.editUser)
// follow
router.put('/:id/follow', usersCtrl.heartUser)
// unfollow
router.put('/:id/unfollow', usersCtrl.unHeartUser)
// delete user
router.delete('/:id',usersCtrl.deleteUser)

module.exports = router;