'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AdminOrCurrentUser {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, request, response }, next) {
    try {
      const loggedUser = await auth.getUser();
      if (loggedUser.admin) await next();
      if (request.params.id === loggedUser.id) await next();
    } catch (e) {
      response.send('Esta ação só pode ser realizada com o seu próprio usuário ou por um administrador.');
    }
    response.send('Esta ação só pode ser realizada com o seu próprio usuário ou por um administrador.');
  }
}

module.exports = AdminOrCurrentUser;
