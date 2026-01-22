import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import pluginCssModules from 'eslint-plugin-css-modules';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginImport from 'eslint-plugin-import';
import next from '@next/eslint-plugin-next';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.config.js',
      '*.config.mjs',
    ],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'app/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        // Node.js globals
        process: 'readonly',
        require: 'readonly',
        // React
        React: 'readonly',
        // Next.js
        Request: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      prettier: pluginPrettier,
      'unused-imports': pluginUnusedImports,
      'css-modules': pluginCssModules,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
      import: pluginImport,
      '@next/next': next,
      '@typescript-eslint': tseslint,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'css-modules': {
        basePath: 'src',
        camelCase: true,
      },
    },
    rules: {
      // TypeScript ESLint recommended rules
      ...tseslint.configs.recommended.rules,

      // React recommended rules (with overrides)
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,

      // Prettier configuration
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          arrowParens: 'avoid',
          endOfLine: 'auto',
          ignoreWhitespace: true,
        },
      ],

      // React rules (optimized for TypeScript)
      'react/prop-types': 'off', // TypeScript provides type safety
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/destructuring-assignment': 'off',
      'react/jsx-no-bind': 'off',
      'react/style-prop-object': 'off',
      'react/require-default-props': 'off',
      'react-hooks/exhaustive-deps': 'off',

      // Next.js Core Web Vitals rules
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-unwanted-polyfillio': 'warn',
      '@next/next/no-page-custom-font': 'warn',

      // TypeScript specific rules
      '@typescript-eslint/no-use-before-define': ['warn'],
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',

      // Import rules
      'import/no-unresolved': 'off',
      'import/prefer-default-export': ['warn', { target: 'single' }],
      'import/no-extraneous-dependencies': 'off',
      'import/extensions': [
        'warn',
        'never',
        {
          css: 'always',
          scss: 'always',
          json: 'always',
        },
      ],

      // JSX Accessibility rules
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/label-has-associated-control': 'off',

      // CSS Modules rules
      'css-modules/no-unused-class': 'warn',
      'css-modules/no-undef-class': 'warn',

      // General JavaScript/TypeScript rules
      'no-use-before-define': 'off',
      'func-names': 'off',
      'no-param-reassign': 'off',
      'class-methods-use-this': 'off',
      'prefer-destructuring': 'off',
      camelcase: 'off',
      'no-nested-ternary': 'warn',
      'no-unreachable-loop': 'warn',
      'no-plusplus': 'warn',
      'no-restricted-syntax': 'warn',
      'default-case': 'warn',
      'no-await-in-loop': 'off',
      'no-continue': 'off',

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];
