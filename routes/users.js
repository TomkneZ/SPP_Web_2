var express = require('express');
const { route } = require('.');

var router = express.Router();

var controller = require('../controllers/usersController');

var auth = require('../middleware/auth');

router.get('/me', auth, controller.get_user_profile);

router.post('/adduser', controller.add_user);

router.post('/loginuser', controller.login_user);

router.post('/me/logout', auth, controller.logout_user);

module.exports = router;