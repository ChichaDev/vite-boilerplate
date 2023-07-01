// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['react-refresh', 'prettier', 'import', '@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },

  rules: {
    'react-refresh/only-export-components': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports'
      }
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '@/**/**',
            group: 'parent',
            position: 'before'
          }
        ],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always'
      }
    ],
    'import/newline-after-import': 'error',
    'import/export': 'error',

    quotes: ['error', 'single'],
    eqeqeq: 'error',
    indent: ['error', 2],
    semi: ['error', 'always'],
    'max-len': ['error', { code: 90 }],
    'brace-style': ['error', '1tbs'],
    'comma-spacing': 'error',
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    'no-var': 'error',
    'no-new-object': 'error',
    'no-prototype-builtins': 'error',
    'prefer-object-spread': 'error',
    'no-array-constructor': 'error',
    'array-callback-return': 'error',
    'prefer-destructuring': 'error',
    'no-eval': 'error',
    'default-param-last': 'error',
    'no-new-func': 'error',
    'arrow-parens': ['error', 'always'],
    'no-confusing-arrow': 'error',
    'implicit-arrow-linebreak': 'error',
    'import/no-mutable-exports': 'error',
    'object-curly-newline': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-mixed-operators': 'error',
    'no-else-return': 'error',
    'spaced-comment': ['error', 'always'],
    'block-spacing': ['error', 'always']
  }
};
