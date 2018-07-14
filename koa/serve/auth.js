const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const knex = require('./db/connection');
// options for LocalStrategy by bblu @ 2018-06-
const options = {usernameField:'name',passwordField:'pswd'};

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

passport.serializeUser((user, done) => { done(null, user.id); });

passport.deserializeUser((id, done) => {
  return knex('users').where({id}).first()
  .then((user) => { done(null, user); })
  .catch((err) => { done(err,null); });
});

passport.use(new LocalStrategy(options, (name, pswd, done) => {
  knex('users').where({ name }).first()
  .then((user) => {
    if (!user) return done(null, false);
    if (!comparePass(pswd, user.pswd)) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  })
  .catch((err) => { return done(err); });
}));
