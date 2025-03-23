// Base Rules
export const baseRules = {
  // Formatting and Style
  indent: ['error', 2, { MemberExpression: 1 }],
  'linebreak-style': ['error', 'unix'],
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  'comma-dangle': ['error', 'never'],
  'comma-spacing': ['error', { before: false, after: true }],
  'eol-last': ['error', 'always'],
  'key-spacing': ['error', { afterColon: true }],
  'no-multiple-empty-lines': ['error'],
  'space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always'
  }],

  // JavaScript Rules
  'no-undef': 'off',
  'no-async-promise-executor': 'off',
  'no-unexpected-multiline': 'off',
};

// TypeScript Rules
export const typescriptRules = {
  '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  '@typescript-eslint/no-unsafe-declaration-merging': 'off',
  '@typescript-eslint/no-empty-object-type': 'off'
}

// React Rules
export const reactRules = {
  'jsx-quotes': ['error', 'prefer-single'],
  'react/jsx-curly-brace-presence': ['error', { props: 'always', children: 'ignore' }],
  'react/function-component-definition': [2, {
    namedComponents: 'arrow-function',
    unnamedComponents: 'function-expression'
  }],
  'react/react-in-jsx-scope': 'off'
}