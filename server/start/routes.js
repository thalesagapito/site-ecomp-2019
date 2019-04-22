'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.post('login', 'UserController.login').validator('Login');

Route.resource('users', 'UserController').apiOnly()
  // .middleware(new Map([
  //   [['destroy'], ['admin']],
  //   [['update'], ['adminOrCurrentUser']],
  // ]))
  .validator(new Map([
    [['store'], ['StoreUser']],
    [['update'], ['UpdateUser']],
  ]));
Route.get('user', 'UserController.currentUser').middleware('auth');

const rotaNaoEncontrada = 'A rota da API requisitada não foi encontrada, verifique se'
  + ' ela está escrita corretamente e se o método utilizado (GET, POST, etc) também está correto.'
  + ' Lembrando que as rotas da API estão definidas em /server/start/routes.js.'
  + ' Além disso, todas as alterações no arquivo routes.js exigem restartar o servidor do Adonis'
  + ' (basta digitar rs no terminal que está rodando o servidor).';
Route.any('*', () => rotaNaoEncontrada);
