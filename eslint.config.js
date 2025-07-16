import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist', 'build'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx,js}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'react-hooks/rules-of-hooks': 'warn',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: '*', next: 'class' },
        { blankLine: 'always', prev: '*', next: 'if' },
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'const' },
        { blankLine: 'always', prev: '*', next: 'let' },
        { blankLine: 'always', prev: '*', next: 'var' },
        { blankLine: 'always', prev: 'const', next: 'const' },
        { blankLine: 'always', prev: 'let', next: 'let' },
        { blankLine: 'always', prev: 'var', next: 'var' },
        { blankLine: 'always', prev: 'function', next: 'function' },
        { blankLine: 'always', prev: 'class', next: 'class' },
        { blankLine: 'always', prev: 'if', next: 'if' },
        { blankLine: 'always', prev: 'return', next: 'return' },
      ],
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^react'],

            // ext library & side effect imports
            ['^@?\\w', '^\\u0000'],

            // Node.js builtins prefixed with `node:`.
            ['^node:'],

            // {s}css files
            ['^.+\\.s?css$'],

            ['^date-fns'],

            [
              '^',
              '^ui',
              '^utils',
              '^types',
              '^theme',
            ],
            [
              '^',
              '^\\./?$',
              '^\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./?$',
              '^\\.\\./\\..(?!/?$)',
              '^\\.\\./\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\./\\..(?!/?$)',
            ],
            // other that didn't fit in
            ['^'],
          ],
        },
      ],
    },
  },
);
