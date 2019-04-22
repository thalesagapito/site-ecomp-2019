'use strict';

class Login {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      email: 'required',
      password: 'required',
    };
  }

  get messages() {
    return {
      'email.required': 'Escreva um email.',
      'password.required': 'Escreva uma senha.',
    };
  }
}

module.exports = Login;
