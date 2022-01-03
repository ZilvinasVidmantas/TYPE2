module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-underscore-dangle': 'allow',
  },
};
