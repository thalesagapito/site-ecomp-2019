'use strict';

class StoreUser {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: 'required|max:254',
      email: 'required|email|unique:users|max:254',
      password: 'required|confirmed|min:6|max:60',
    };
  }

  get messages() {
    return {
      'name.required': 'Escreva um nome.',
      'name.max': 'O nome deve ter no máximo 254 caracteres.',
      'email.required': 'Escreva um endereço de email.',
      'email.email': 'Escreva um endereço de email válido.',
      'email.unique': 'O email escolhido já está cadastrado.',
      'email.max': 'O email deve ter no máximo 254 caracteres.',
      'password.required': 'Escreva uma senha.',
      'password.confirmed': 'A senha e a confirmação precisam ser iguais.',
      'password.min': 'A senha deve ter no mínimo 6 caracteres.',
      'password.max': 'A senha deve ter no máximo 60 caracteres.',
    };
  }
}

module.exports = StoreUser;
