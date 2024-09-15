import js from '@eslint/js';
import * as regexpPlugin from 'eslint-plugin-regexp';
import prettierPlugin from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import { adapterConfig, legacyPlugin } from '../utils/index.js';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export const base = tseslint.config(
   {
      plugins: {
         import: legacyPlugin('eslint-plugin-import', 'import'),
         prettier: prettierPlugin,
      },
   },

   // Settings
   {
      languageOptions: {
         parserOptions: {
            projectService: {
               allowDefaultProject: ['./*.js'],
               defaultProject: './tsconfig.json',
            },
            tsconfigRootDir: import.meta.dirname,
            sourceType: 'module',
         },
         globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.es2020,
         },
      },
   },

   {
      settings: {
         'import/resolver': {
            typescript: {
               alwaysTryTypes: true,
               project: './tsconfig.json',
            },
         },
      },
   },

   {
      linterOptions: {
         reportUnusedDisableDirectives: true,
      },
   },

   // Configs
   js.configs.recommended,
   ...tseslint.configs.recommendedTypeChecked,
   regexpPlugin.configs['flat/recommended'],
   ...adapterConfig('plugin:import/typescript'),
   ...adapterConfig('airbnb-base'),

   // Rules
   {
      files: ['**/*.{ts,tsx}'],
      rules: {
         ...prettierPlugin.configs.recommended.rules,
         ...prettierConfig.rules,
         '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
         ],

         '@typescript-eslint/consistent-type-imports': [
            'warn',
            { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
         ],

         'import/prefer-default-export': 'off',

         'import/extensions': [
            'error',
            'ignorePackages',
            {
               js: 'never',
               jsx: 'never',
               ts: 'never',
               tsx: 'never',
            },
         ],

         'import/order': [
            'error',
            {
               groups: [
                  'builtin',
                  'external',
                  'internal',
                  'parent',
                  'sibling',
                  'index',
                  'object',
                  'type',
               ],
               'newlines-between': 'always-and-inside-groups',
               pathGroups: [
                  {
                     pattern: '@/styles/**',
                     group: 'internal',
                     position: 'after',
                  },
                  {
                     pattern: '@/**',
                     group: 'internal',
                  },
               ],
               pathGroupsExcludedImportTypes: ['builtin'],
               alphabetize: {
                  order: 'asc',
                  caseInsensitive: true,
               },
            },
         ],
      },
   },
);
