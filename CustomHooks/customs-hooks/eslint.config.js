import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from '@eslint/config';

const config = defineConfig([
  {
    // Ignore the 'dist' directory globally
    ignores: ['dist'],
  },
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      'plugin:react-hooks/recommended',
      'plugin:react-refresh/recommended',
    ],
    languageOptions: {
      // Use modern ECMAScript features
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      // Include browser globals for client-side JavaScript
      globals: globals.browser,
    },
    rules: {
      // Ensure unused variables are flagged, but allow uppercase constants
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      // Add other recommended rules from plugins if not implicitly included by 'extends'
      // For example, if 'plugin:react-hooks/recommended' doesn't cover all, you might add:
      // 'react-hooks/exhaustive-deps': 'warn',
    },
    // For Vite-specific setups, reactRefresh often injects configuration.
    // If 'plugin:react-refresh/recommended' doesn't suffice or you need custom Vite settings:
    // settings: {
    //   react: {
    //     version: 'detect',
    //   },
    // },
  },
]);

export default config;
