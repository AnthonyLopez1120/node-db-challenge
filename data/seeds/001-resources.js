
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Dope Skills', description: "Skills that are dope"},
        {id: 2, name: 'Bold Ambition', description: "Because normal is boring"},
        {id: 3, name: 'Magic', description: "Holy magic"}
      ]);
    });
};
