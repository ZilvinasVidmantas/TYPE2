const relativePaths = require('./relative-paths');

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    project: './tsconfig.json'
  },

  plugins: [
    'react',
    '@typescript-eslint'
  ],

  rules: {
    'import/no-cycle': [0],
    quotes: [2, 'single'],
    'quote-props': [2, 'as-needed'],
    'linebreak-style': [2, 'unix'],
    'react/jsx-props-no-spreading': [0],
    'react/function-component-definition': [2, {
      'namedComponents': 'arrow-function',
      'unnamedComponents': 'arrow-function',
    }],
  },

  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: relativePaths,
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
