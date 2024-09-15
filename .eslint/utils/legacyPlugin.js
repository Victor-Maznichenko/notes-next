import { fixupPluginRules } from '@eslint/compat';
import { compat } from './adapterConfig.js';

/**
 * @param {string} name the pugin name
 * @param {string} alias the plugin alias
 * @returns {import("eslint").ESLint.Plugin}
 */
export function legacyPlugin(name, alias = name) {
   const plugin = compat.plugins(name)[0]?.plugins?.[alias];

   if (!plugin) {
      throw new Error(`Unable to resolve plugin ${name} and/or alias ${alias}`);
   }

   return fixupPluginRules(plugin);
}
