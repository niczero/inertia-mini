module.exports = {
  extends: [
    'eslint:recommended',
  ],
  rules: {
    "indent": ['error', 2],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'comma-dangle': ['warn', 'always-multiline'],
    'svelte3/named-blocks': 'off',
  }
}
