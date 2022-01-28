const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
const relativePaths = require('./relative-paths');

const aliases = Object.entries(relativePaths)
  .reduce((aliasesObj, [alias, aliasPath]) => ({
    ...aliasesObj,
    [alias]: path.resolve(__dirname, aliasPath),
  }), {});

module.exports = override(
  addWebpackAlias(aliases),
);
