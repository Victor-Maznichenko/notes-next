'use strict';

import tseslint from 'typescript-eslint';
import { configs } from './.eslint/index.js';

export default tseslint.config(...configs.next, ...configs.base, {
   ignores: ['.next/*', 'dist/*', '.eslint/*', '*.{js,mjs}'],
});
