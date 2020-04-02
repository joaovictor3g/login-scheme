
exports.up = function(knex) {
    return knex.schema.createTable('logins', function (table){
        table.increments();

        table.string('matricula').notNullable();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('curso').notNullable();
    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable('logins');
};
