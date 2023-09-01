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
router.put('/:id',ensureLoggedIn, usersCtrl.update)

module.exports = router;