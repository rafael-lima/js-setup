'use strict';

export default {
	extends: 'eslint:recommended',
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module'
	},
	rules: {
		'array-bracket-spacing': 'warn',
		'array-callback-return': 'error',
		'arrow-parens': 'warn',
		'brace-style': 'warn',
		'camelcase': 'error',
		'consistent-this': 'error',
		'curly': 'off',
		'default-case': 'error',
		'guard-for-in': 'warn',
		'linebreak-style': ['error', 'unix'],
		'max-depth': ['warn', 3],
		'max-len': ['warn', {
			code: 80,
			tabWidth: 2,
			ignoreUrls: true
		}],
		'max-lines': ['warn', 150],
		'max-nested-callbacks': ['warn', 2],
		'max-params': ['warn', 3],
		'new-cap': 'error',
		'new-parens': 'warn',
		'no-alert': 'warn',
		'no-array-constructor': 'warn',
		'no-bitwise': 'warn',
		'no-confusing-arrow': 'warn',
		'no-console': 'off',
		'no-continue': 'warn',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-loop-func': 'error',
		'no-multi-spaces': 'warn',
		'no-multiple-empty-lines': 'warn',
		'no-nested-ternary': 'warn',
		'no-new-func': 'warn',
		'no-new-object': 'warn',
		'no-new-wrappers': 'warn',
		'no-proto': 'warn',
		'no-throw-literal': 'warn',
		'no-trailing-spaces': 'warn',
		'no-unneeded-ternary': 'warn',
		'no-unused-expressions': 'error',
		'no-unused-vars': 'warn',
		'no-useless-call': 'warn',
		'no-useless-return': 'warn',
		'no-var': 'warn',
		'no-void': 'error',
		'no-with': 'error',
		'prefer-arrow-callback': 'warn',
		'prefer-rest-params': 'warn',
		'prefer-spread': 'warn',
		'prefer-template': 'warn',
		'quotes': ['warn', 'single', { allowTemplateLiterals: true }],
		'semi': 'error',
		'space-before-blocks': 'warn',
		'spaced-comment': 'warn'
	}
};