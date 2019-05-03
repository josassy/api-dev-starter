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
