'use strict';

class UpdateUser {
  get rules() {
    return {
      name: 'required|max:254',
    };
  }

  get messages() {
    return {
      'name.required': 'Escreva um nome.',
      'name.max': 'O nome deve ter no máximo 254 caracteres.',
    };
  }
}

module.exports = UpdateUser;
