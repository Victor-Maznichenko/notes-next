import tseslint from 'typescript-eslint';
import { adapterConfig } from '../../utils/index.js';

export const react = tseslint.config(
   ...adapterConfig('plugin:react/recommended'),
   ...adapterConfig('plugin:react-hooks/recommended'),
   ...adapterConfig('plugin:jsx-a11y/strict'),

   {
      settings: {
         react: {
            version: 'detect',
         },
      },
      rules: {
         'react/react-in-jsx-scope': 'off',
         'react/prop-types': 'off',
      },
   },
);
