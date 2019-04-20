// t.increments('id').unsigned().primary();
// t.integer('owner').unsigned().references('id').inTable('user');
// t.string('description').nullable();
// t.date('dueDate').notNull();
// t.integer('category').unsigned().references('id').inTable('category');
// t.integer('taskType').unsigned().references('id').inTable('task_type');
// t.boolean('status').notNull();

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {
          owner: 1,
          description: 'Learn Node.js',
          dueDate: new Date(2019, 3, 30),
          category: 2,
          taskType: 4, // may need to adjust these as needed
          status: false
        },
        {
          owner: 1,
          description: 'Get married',
          dueDate: new Date(2019, 4, 25),
          category: 2,
          taskType: 6,
          status: false
        }
      ]);
    });
};
