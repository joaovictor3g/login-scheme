
exports.up = function(knex) {
    return knex.schema.createTable('logins', function (table){
        table.increments();

        table.string('matricula').notNullable();
        table.string('nome_login').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        
        table.integer('id_curso').notNullable();
        table.foreign('id_curso').references('id').inTable('cursos');

    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable('logins');
};
