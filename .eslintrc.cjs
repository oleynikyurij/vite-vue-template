/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-essential', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['vue'],
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [0, { 'packageDir ': './src/' }],
    // 'max-len': [
    //   'error',
    //   {
    //     code: 160,
    //     ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"', // ignore classes or svg draw attributes
    //     ignoreUrls: true,
    //   },
    // ],
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-plusplus': 'off',
    'max-len': ['error', { ignorePattern: '([\\s\\S]*?)' }],
    'no-alert': 'off',
    'vuejs-accessibility/label-has-for': 'off',
  },
  settings: {
    'import/resolver': {
      // node: {
      //   extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
      //   moduleDirectory: ['node_modules', 'src/'],
      // },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', 'svg'],
        map: [['@', './src']],
      },
    },
  },
};
