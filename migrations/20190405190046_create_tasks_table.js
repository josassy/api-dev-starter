
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function(t) {
    t.increments('id').unsigned().primary();
    t.integer('owner').unsigned().references('id').inTable('users');
    t.string('description').nullable();
    t.date('dueDate').notNull();
    t.integer('category').unsigned().references('id').inTable('categories');
    t.integer('taskType').unsigned().references('id').inTable('task_types');
    t.boolean('status').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
};
