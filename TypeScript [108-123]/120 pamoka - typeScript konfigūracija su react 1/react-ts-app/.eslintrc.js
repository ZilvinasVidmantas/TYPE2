module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'quote-props': [2, 'as-needed'],
    "@typescript-eslint/semi": [2, 'always'],
    // "@typescript-eslint/typedef": [2, {
    //   arrayDestructuring: false,
    //   arrowParameter: false,
    //   memberVariableDeclaration: false,
    //   objectDestructuring: false,
    //   parameter: false,
    //   propertyDeclaration: false,
    //   variableDeclaration: true,
    //   variableDeclarationIgnoreFunction: false,
    // }]
  }
}
