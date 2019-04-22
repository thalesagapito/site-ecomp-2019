module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'strict': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'consistent-return': 'off',
    'import/no-unresolved': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': ['error', { 'props': false }],
  },
  'globals': {
    'use': true,
  },
};
