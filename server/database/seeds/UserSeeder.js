'use strict';

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Database = use('Database');
const User = use('App/Models/User');

class UserSeeder {
  async run() {
    // Remove todos os dados da tabela de usuarios
    await User.truncate();
    // Cria o user admin
    await User.create({
      name: 'Administrador',
      email: 'admin@ecomp.co',
      password: 'secret',
      admin: true,
      active: true,
    });
    // Cria 5 usuarios usando o factory de users
    await Factory.model('App/Models/User').createMany(5);
    // Busca todos os usuarios da tabela de users
    const users = await Database.table('users');
    // Printa os usuarios encontrados
    console.log(users);
  }
}

module.exports = UserSeeder;
