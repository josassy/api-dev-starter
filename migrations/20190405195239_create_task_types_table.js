
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task_types', function(t) {
    t.increments('id').unsigned().primary();
    t.string('name').notNull();
    t.string('alias').notNull();
    t.integer('order').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task_types');
};
