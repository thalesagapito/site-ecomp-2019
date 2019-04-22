'use strict';

const User = use('App/Models/User');

class UserController {
  async login({ auth, request, response }) {
    const { email, password } = request.all();
    const userNotFound = [{ field: 'email', message: `O usuário ${email} não foi encontrado.` }];
    const passwordMismatch = [{ field: 'password', message: 'Email ou senha incorretos' }];

    try {
      const token = await auth.attempt(email, password);
      response.ok(token);
    } catch ({ code }) {
      if (code === 'E_USER_NOT_FOUND') response.unauthorized(userNotFound);
      if (code === 'E_PASSWORD_MISMATCH') response.unauthorized(passwordMismatch);
    }
  }

  async index({ response }) {
    response.ok(await User.all());
  }

  async store({ request, response }) {
    const { name, email, password } = request.all();
    response.created(await User.create({ name, email, password }));
  }

  async show({ params: { id }, response }) {
    response.ok(await User.find(id));
  }

  async update({ request, params: { id }, response }) {
    const { name } = request.all();
    const user = await User.find(id);

    if (!user) response.notFound('Usuário não encontrado');

    user.merge({ name });
    user.save();
    response.ok(user);
  }

  async currentUser({ auth, response }) {
    try {
      const loggedUser = await auth.getUser();
      response.ok(loggedUser);
    } catch (e) {
      response.notFound('Usuário logado não encontrado');
    }
  }
}

module.exports = UserController;
