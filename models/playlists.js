'use strict';
module.exports = (sequelize, DataTypes) => {
  const Playlists = sequelize.define('Playlists', {
    playlist_name: DataTypes.STRING,
    userid: DataTypes.INTEGER
  }, {});
  Playlists.associate = function(models) {
    Playlists.belongsTo(models.Users, {foreignKey: 'userid'})
    Playlists.belongsToMany(models.Songs, {
      through: 'Songs_Playlists',
      foreignKey: 'playlistId',
      otherKey: 'songid'
    })
  };
  return Playlists;
};