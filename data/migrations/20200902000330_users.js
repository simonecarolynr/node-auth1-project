
exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
        tbl.increments("id")
        tbl.text("username")
        tbl.text("password")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
};
