const express = require('express');

const router = express.Router();

const userController = require('../controller/users');

router.route('/').get(userController.getUser);

module.exports = router;
