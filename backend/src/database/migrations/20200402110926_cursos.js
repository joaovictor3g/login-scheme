exports.up = function(knex) {
    return knex.schema.createTable('cursos', function(table) {
        table.increments();
        
        table.string('nome_curso').notNullable();
        table.string('turno').notNullable();
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cursos');
};
