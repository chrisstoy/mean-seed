module.exports = {
  // we have to use the legacy flavor because we use ES5
  extends: ['airbnb-base'],
  plugins: [
    'lodash',
    'promise'
  ],
  rules: {
    // override some rules from the "airbnb-base/legacy" configuration
    'camelcase': 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'consistent-return': 0,
    'eqeqeq': 0,
    'func-names': 0,
    'global-require': 0,
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'max-len': 0,
    'no-bitwise': 0,
    'no-console': 0,
    'no-continue': 0,
    'no-else-return': 0,
    'no-lonely-if': 0,
    'no-multi-assign': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-undef-init': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'operator-assignment': 0,
    'padded-blocks': 0,
    'quote-props': 0,
    //'quotes': 0,
    'spaced-comment': 0,
    'vars-on-top': 0,
    // activate rules from the lodash plugin
    'lodash/callback-binding': 2,
    'lodash/no-double-unwrap': 2,
    'lodash/no-extra-args': 2,
    'lodash/unwrap': 2,
    'lodash/chain-style': [2, 'explicit'],
    // activate rules from the promise plugin
    'promise/param-names': 2,
  },
  globals: {

  }
};
