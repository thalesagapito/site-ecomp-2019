'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments();
      table.string('name', 254).notNullable();
      table.string('email', 254).notNullable().unique();
      table.boolean('admin').notNullable().defaultTo(false);
      table.boolean('active').notNullable().defaultTo(false);
      table.string('password', 6, 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
