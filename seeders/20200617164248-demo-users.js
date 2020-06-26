'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      {
        name: 'Shawn Carter',
        username: 'jayz',
        password: 'beyonce',
        email: 'jay@yahoo.com',
        img: 'https://townsquare.media/site/812/files/2017/11/jay-z.jpg?w=980&q=75'
      },
      {
        name: 'Maro',
        username: 'MarioL',
        password: '123456',
        email: 'mario@yahoo.com',
        img: 'https://townsquare.media/site/812/files/2017/11/jay-z.jpg?w=980&q=75'
      }
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
