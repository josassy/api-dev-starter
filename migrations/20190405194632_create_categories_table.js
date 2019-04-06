
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(t) {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.integer('owner').unsigned().references('id').inTable('users').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
