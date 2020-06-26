'use strict';
module.exports = (sequelize, DataTypes) => {
  const Songs_Playlist = sequelize.define('Songs_Playlist', {
    playlistId: DataTypes.INTEGER,
    songid: DataTypes.INTEGER
  }, {});
  Songs_Playlist.associate = function(models) {
  };
  return Songs_Playlist;
};