module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  extends: 'airbnb',
  env: {
    'browser': true
  },
  globals: {
    describe: true,
    it: true,
    before: true,
    beforeEach: true,
    after: true,
    afterEach: true
  },
  rules: {
    'import/extensions': 'off',
    'linebreak-style': 'off',
  },
};
