import tseslint from 'typescript-eslint';
import { adapterConfig } from '../utils/index.js';

export const next = tseslint.config(...adapterConfig('plugin:@next/next/core-web-vitals'));
