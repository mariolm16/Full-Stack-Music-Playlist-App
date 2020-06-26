const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/:userid/:index', ctrl.playlists.showPlaylist);
router.post('/:userid/:index', ctrl.playlists.createSongs);
router.delete('/:userid/:playlistid/:songid', ctrl.playlists.deleteSong);
router.delete('/:userid/:index', ctrl.playlists.deletePlaylist);
router.put('/:userid/:playlistid/:songid', ctrl.playlists.addSong);



module.exports = router;
