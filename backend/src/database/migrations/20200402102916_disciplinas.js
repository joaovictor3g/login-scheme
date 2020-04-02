exports.up = function(knex) {
    return knex.schema.createTable('disciplinas', function(table) {
        table.increments();
        table.string('nome_disciplina').notNullable();
        
        table.integer('aluno_id').notNullable();
        table.foreign('aluno_id').references('id').inTable('logins');

        table.integer('curso_id').notNullable();
        table.foreign('curso_id').references('cursos').inTable('id');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('disciplinas');
};
