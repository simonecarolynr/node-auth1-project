const knex = require('knex')

const knexfile = require('../../../knexfile')

const dev = "development"

module.exports = knex(knexfile[dev])