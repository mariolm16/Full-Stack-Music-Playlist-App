const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/signup', ctrl.auth.renderSignup);
router.post('/', ctrl.auth.signup);
router.get('/login', ctrl.auth.renderLogIn)
router.post('/login', ctrl.auth.login);

module.exports = router;
