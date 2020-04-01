
exports.up = function(knex) {
    return knex.schema.createTable('logins', function (table){
        table.string('matricula').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('curso').notNullable();
    }) 
};

exports.down = function(knex) {
    return knex.schema.dropTable('logins');
};
