const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('koa-passport');

const index = require('./serve/routes/index');
const movie = require('./serve/routes/movies');
const auth = require('./serve/routes/auth');
const store = require('./serve/session');

const app = new Koa();
const PORT = process.env.PORT || 8088;

// sessions
app.keys = ['super-secret-key'];
app.use(session({ store }, app));

// body parser
app.use(bodyParser());

// authentication
require('./serve/auth');
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(index.routes());
app.use(movie.routes());
app.use(auth.routes());

// server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
