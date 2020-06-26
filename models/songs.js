'use strict';
module.exports = (sequelize, DataTypes) => {
  const Songs = sequelize.define('Songs', {
    name: DataTypes.STRING,
    artist: DataTypes.STRING,
    album: DataTypes.STRING,
    video: DataTypes.STRING
  }, {});
  Songs.associate = function(models) {
      Songs.belongsToMany(models.Playlists, {
        through: 'Songs_Playlists',
        foreignKey: 'songid',
        otherKey: 'playlistId'
  }); 
  };
  return Songs;
};
