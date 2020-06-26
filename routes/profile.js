const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:index', ctrl.profile.renderProfile);
router.put('/:index', ctrl.profile.editProfile);
router.delete('/:index', ctrl.profile.deleteProfile);
router.post('/:index', ctrl.profile.createPlaylist);





module.exports = router;

