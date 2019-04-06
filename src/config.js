//import 'dotenv/config';
var dotenv = require('dotenv');
dotenv.load();

module.exports = {
  knex: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port:  process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      charset: 'utf8',
      timezone: 'UTC'
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  hapi: {
    port: process.env["API_PORT"],
    host: process.env["API_HOST"],
    routes: {
      cors: {
        origin: ["*"],
        headers: ["Accept", "Content-Type"],
        additionalHeaders: ["X-Requested-With"]
      }
    }
  }
}
