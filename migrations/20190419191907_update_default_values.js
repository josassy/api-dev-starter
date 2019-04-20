
exports.up = function(knex, Promise) {
  return knex.schema.table('task', function(t) {
    t.timestamp('dueDate').notNull().defaultTo(knex.fn.now()).alter();
    t.boolean('status').notNull().defaultTo(false).alter();
  })
};

exports.down = function(knex, Promise) {

};
