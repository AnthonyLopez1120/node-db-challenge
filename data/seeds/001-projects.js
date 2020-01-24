
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'do dope sh*t', description: "like a boss"},
        {id: 2, name: 'do dope sh*t again', description: "like a king"},
        {id: 3, name: 'do dope sh*t once more', description: "like a god"}
      ]);
    });
};
