import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js },
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: { ...globals.node },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
            quotes: ['error', 'single'],
            semi: ['warn', 'always'],
            indent: ['error', 4],
            'object-curly-spacing': ['warn', 'always'],
            'arrow-spacing': ['error', { before: true, after: true }],
        },
    },
]);
