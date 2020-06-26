const Users = require('../models').Users;
const Playlists = require('../models').Playlists;
const Songs = require('../models').Songs;
const Songs_Playlist = require('../models').Songs_Playlist;


const showPlaylist = (req, res) => {
  Playlists.findByPk(req.params.index, {
    include: [{model: Users},
      {model: Songs}], 
    })
    .then(foundPlaylists => {
      Songs.findAll()
      .then(allSongs => {
        res.render('playlists.ejs', {
          playlists: foundPlaylists,
          songs: allSongs,
                userId: req.params.userid
        });
      })
  })
}

const createSongs = (req, res) => {
  Songs.create(req.body, {
    returning: true
  })
  .then(newSong => {
    Playlists.findByPk(req.params.index)
    .then(foundPlaylist => {
      newSong.setPlaylists(foundPlaylist.id)
      .then(songUpdate => {
        res.redirect(`/playlists/${req.params.userid}/${req.params.index}`)
      })    
    })
  })
}

const deleteSong = (req, res) => {
  Songs_Playlist.destroy({
    where: {
      playlistId: req.params.playlistid,
      songid: req.params.songid
    }
  })	
  .then(() => {
    res.redirect(`/playlists/${req.params.userid}/${req.params.playlistid}`);
  })
}

const deletePlaylist = (req, res) => {
  Playlists.destroy({
    where: {
      id: req.params.index,
    }
  })
  .then(() => {
    res.redirect(`/profile/${req.params.userid}`);
  })
} 

const addSong = (req, res) => {
  Songs.findByPk(req.params.songid)
  .then(foundSong => {
    Playlists.findByPk(req.params.playlistid)
    .then(foundPlaylist => {
      foundPlaylist.addSongs(foundSong);
      res.redirect(`/playlists/${req.params.userid}/${req.params.playlistid}`);
    })
  })
}

module.exports = {
    showPlaylist,
    createSongs,
    deletePlaylist,
    addSong,
    deleteSong   
}