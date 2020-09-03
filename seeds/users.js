
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'janedoe123@gmail.com', password: 'abc123'},
        {username: 'susan.collins98@yahoo.ca', password: 'yourm0m'},
        {username: 'kravitzjarod54@hotmail.com', password: 'fluffy202'}
      ]);
    });
};
