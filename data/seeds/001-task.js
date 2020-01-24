
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, project_id: 1, description: 'rowValue1', notes: "stuff"},
        {id: 2, project_id: 1, description: 'rowValue2', notes: "stuff"},
        {id: 3, project_id: 2, description: 'rowValue3', notes: "stuff"},
        {id: 4, project_id: 2, description: 'rowValue3', notes: "stuff"},
        {id: 5, project_id: 3, description: 'rowValue3', notes: "stuff"},
        {id: 6, project_id: 3, description: 'rowValue3', notes: "stuff"},
      ]);
    });
};
