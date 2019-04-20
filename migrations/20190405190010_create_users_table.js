
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(t) {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.string('email').notNull();
    t.string('password').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
