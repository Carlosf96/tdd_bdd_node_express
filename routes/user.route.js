const express = require('express');
const router = express.Router();
const controller = require('../controllers/User.controller');

router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUser);

module.exports = router;