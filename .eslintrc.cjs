module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  rules: {
    'arrow-body-style': 'off',

    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'always',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/setupProxy.js',
          'src/setupTests.js',
          'src/testUtils.tsx',
          '**/*.test.ts',
          '**/*.test.tsx',
        ],
      },
    ],
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      { alphabetize: { order: 'asc', caseInsensitive: true } },
    ],
    'import/prefer-default-export': 'off',

    // Must disable the base rule as it can report incorrect errors
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    // Covered by typescript
    'no-undef': 'off',
    'no-unused-vars': 'off',

    // Allow function hoisting to be used.
    'no-use-before-define': 'off',

    // Require blank lines:
    //   - before return statements
    //   - after case statements
    //   - after variable declarations
    //   - in-between expressions and variable declarations
    //   - after the closing of a block
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'case', next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: 'expression',
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
    ],

    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      { callbacksLast: true, shorthandFirst: true, ignoreCase: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
  },
}
