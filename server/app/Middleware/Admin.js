'use strict';

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ auth, response }, next) {
    try {
      const loggedUser = await auth.getUser();
      if (loggedUser.admin) await next();
    } catch (e) {
      response.send('É necessário ser administrador para realizar essa ação.');
    }
  }
}

module.exports = Admin;
