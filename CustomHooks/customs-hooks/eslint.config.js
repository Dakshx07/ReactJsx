import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    // Ignore files in the 'dist' directory
    ignores: ['dist/**'],
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      // Use a more modern ECMAScript version
      ecmaVersion: 2024,
      // Explicitly set globals for browser environments
      globals: globals.browser,
      parserOptions: {
        // Allow modern ECMAScript features and JSX
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // More specific rule for unused variables, allowing uppercase constants
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]', argsIgnorePattern: '^_' }],
    },
  },
]);
