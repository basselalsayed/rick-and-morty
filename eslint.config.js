// @ts-check

import config from 'eslint-config-bsas';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(...config, {
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
