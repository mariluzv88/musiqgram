const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// create user
router.post('/', usersCtrl.createUser);
// user login
router.post('/login', usersCtrl.loginUser);
// user validate
router.get('/check-token', usersCtrl.checkToken);
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// update user
router.put('/:id/edit', usersCtrl.editUser)
// delete user
router.delete('/:id',usersCtrl.deleteUser)
// follow
// unfollow

module.exports = router;