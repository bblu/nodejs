const path = require('path');

const BASE_PATH = path.join(__dirname, 'serve', 'db');

module.exports = {
  test: {
    client: 'pg',
    //connection: 'postgres://localhost:5432/koa_api_test',
    connection: {
      host: '127.0.0.1',
      database: 'koa_api',
      user: 'postgres',
      password: '123456'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'koa_api',
      user: 'postgres',
      password: '123456'
    },
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};
