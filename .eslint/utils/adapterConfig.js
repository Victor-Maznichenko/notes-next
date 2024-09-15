import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const compat = new FlatCompat({
   baseDirectory: __dirname,
   resolvePluginsRelativeTo: __dirname,
});

export const adapterConfig = (config) => fixupConfigRules(compat.extends(config));
