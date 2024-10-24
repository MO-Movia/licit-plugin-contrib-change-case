module.exports = {
  env: {
    'browser': true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'consistent-return': 'error',
    'no-debugger': 'error',
    'no-invalid-regexp': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    quotes: [2, 'single', {avoidEscape: true}],
    semi: [2, 'always'],
    strict: 0,
  },
  globals: {
    __dirname: false,
    Blob: false,
    File: false,
    Class: false,
    Component: false,
    CSSPageRule: false,
    ClipboardEvent: false,
    Document: true,
    Element: false,
    Event: false,
    HTMLElement: false,
    HTMLDivElement: false,
    HTMLTableCellElement: false,
    HTMLButtonElement: false,
    HTMLLIElement: false,
    HTMLInputElement: false,
    Image: false,
    JSX: false,
    TSX: false,
    localStorage: false,
    Map: false,
    DragEvent: false,
    MouseEvent: false,
    KeyboardEvent: false,
    MutationObserver: false,
    Promise: false,
    Set: false,
    Slice: false,
    SyntheticEvent: false,
    SyntheticMouseEvent: false,
    cancelAnimationFrame: false,
    clearTimeout: false,
    console: false,
    document: false,
    module: false,
    process: false,
    require: false,
    requestAnimationFrame: false,
    setTimeout: false,
    window: false,
    Text: false,
    DataTransfer: false,
    Node: false,
    SVGElement: false,
    HTMLTableElement: false,
    HTMLTableColElement: false,
    HTMLTableSectionElement: false,
    MutationRecord: false,
    URL: false,
    React:false,
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      // enable jest globals in test files
      plugins: ['jest'],
      env: {
        'node': true,
        'jest/globals': true,
      },
    },
  ],
};
