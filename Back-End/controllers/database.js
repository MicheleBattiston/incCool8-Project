const conf = {
    host: 'localhost',
    port: 5432,
    database: 'ecommerce',
    user: 'ecommerce',
    password: 'ecomm'
};

const pgp = require('pg-promise')();
const db = pgp(conf);

module.exports = db;