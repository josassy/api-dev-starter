
exports.up = function(knex, Promise) {
  return knex.schema.createTable('task', function(t) {
    t.increments('id').unsigned().primary();
    t.integer('owner').unsigned().references('id').inTable('user');
    t.string('description').nullable();
    t.date('dueDate').notNull().default(Date.now());
    t.integer('category').unsigned().references('id').inTable('category');
    t.integer('taskType').unsigned().references('id').inTable('task_type');
    t.boolean('status').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('task');
};
