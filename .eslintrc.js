module.exports = {
  root: true,

  env: {
    'vue/setup-compiler-macros': true,
    node: true,
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    'plugin:vue/vue3-recommended',
  ],

  parserOptions: {
    parser: '@babel/eslint-parser',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    'plugin:vue/vue3-recommended',
  ],
};
