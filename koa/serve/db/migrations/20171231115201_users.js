exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name').unique().notNullable();
    table.string('pswd').notNullable();
    table.boolean('admin').notNullable().defaultTo(false);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
