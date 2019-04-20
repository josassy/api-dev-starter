exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          name: 'admin',
          email: 'admin@blisters.io',
          password: '5f4dcc3b5aa765d61d8327deb882cf99' //md5: password
        }
      ]);
    });
};
