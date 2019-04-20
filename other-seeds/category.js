// t.string('name').notNull();
// t.integer('owner').unsigned().references('id').inTable('user').notNull();

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {
          name: 'Work',
          owner: 1
        }
      ]);
    });
};
