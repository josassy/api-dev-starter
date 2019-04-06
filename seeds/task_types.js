
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('task_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('task_types').insert([
        {
          name: 'Normal',
          alias: 'type-norm',
          order: 1
        },
        {
          name: 'Backburner',
          alias: 'type-back',
          order: 2
        },
        {
          name: 'Urgent',
          alias: 'type-urgent',
          order: 3
        }
      ]);
    });
};
