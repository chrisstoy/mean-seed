module.exports = {
    // we have to use the legacy flavor because we use ES5
    extends: ['airbnb-base'],
    plugins: ['lodash', 'promise'],
    rules: {
        'import/newline-after-import': 0,
        'func-names': 0,
        'no-console': 0,
        'prefer-template': 0,
        'spaced-comment': 0,
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