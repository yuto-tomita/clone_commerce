// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable'
  },
  ignorePatterns: ['build'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: 'module'
    // project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 70,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        semi: false
      }
    ],
    quotes: ['error', 'single'],
    'arrow-parens': ['error', 'always'],
    'no-empty-function': 'error',
    'no-console': 'error',
    'valid-typeof': 'error',
    'keyword-spacing': ['error', { before: true }],
    'arrow-spacing': 'error',
    'no-multi-spaces': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-newline': [
      'error',
      { multiline: 'consistent', singleline: 'consistent' }
    ],
    // 'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-indent-props': [
      2,
      { indentMode: 2, ignoreTernaryOperator: true }
    ],
    // 'react/jsx-max-props-per-line': ['error'],
    'react/jsx-tag-spacing': ['error'],
    // 'react/jsx-newline': [2, { prevent: true }],
    'react/jsx-indent': [
      2,
      2,
      { indentLogicalExpressions: true, checkAttributes: true }
    ]
  },
  settings: { react: { version: 'detect' } }
}
