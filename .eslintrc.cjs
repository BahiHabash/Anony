module.exports = {
    'env': {
        'node': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended'
    ],
    'parserOptions': {
        'sourceType': 'module',
        'ecmaVersion': 'latest'
    },
    'rules': {
        'no-unused-vars': 'warn',
        'no-console': 'off',                  // Keep console for backend debugging
        'quotes': ['error', 'single'],        // Consistent single quotes
        'semi': ['warn', 'always'],           // Always use semicolons
        'indent': ['error', 4],               // 4-space indentation
        'object-curly-spacing': ['warn', 'always'],
        'arrow-spacing': ['error', { 'before': true, 'after': true }]
    },
    'globals': {
        'process': 'readonly'
    }
};