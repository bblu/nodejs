const bcrypt = require('bcryptjs');
const knex = require('../connection');

function getSingleUser(id) {
  return knex('users')
  .select('*')
  .where({ id: parseInt(id) });
}

function addUser(user) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(user.password, salt);
  return knex('users')
  .insert({
    name: user.username,
    pswd: hash,
  })
  .returning('*');
}

module.exports = {
  getSingleUser,
  addUser,
};
