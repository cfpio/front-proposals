module.exports = {
  extends: [
    'angular'
  ],
  rules: {
    'angular/no-service-method': 0,
    'max-len': [2, 125, 4],
    'indent': [2, 2],
    'quotes': [1, 'single'],
    'semi': [1, 'never'],
    'keyword-spacing': [2, {'before': true, 'after': true, 'overrides': {}}],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, {'anonymous': 'never', 'named': 'never'}],
    'space-in-parens': [2, 'never'],
    'no-multiple-empty-lines': [2, {'max': 1}],
    'no-use-before-define': [2, 'nofunc'],
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    'comma-dangle': [2, 'never'],
    'comma-style': [2, 'last'],
    'no-underscore-dangle': 0,
    'camelcase': 0,
    'strict': [2, 'function'],
    'max-params': [0],
    'padded-blocks': [0],
    'capitalized-comments': [0],
    'arrow-parens': [0, 'as-needed'],
    'spaced-comment': [0],
    'one-var': [0],
    'angular/definedundefined': [0]
  }
}
