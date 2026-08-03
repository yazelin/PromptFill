/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-hooks', 'react-refresh'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['dist/', 'node_modules/', 'src-tauri/'],
  rules: {
    // React 17+ with the automatic JSX runtime does not need React in scope.
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',

    // This codebase passes props extensively without a PropTypes layer.
    'react/prop-types': 'off',

    // Keep the rules-of-hooks check strict. Exhaustive dependencies remain a
    // follow-up cleanup because the existing app has several intentional
    // mount-only effects.
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',

    // Components are exported from a shared index in this project.
    'react-refresh/only-export-components': 'off',
  },
  overrides: [
    {
      // These modules predate the current component split and intentionally
      // retain some shared imports/props for mobile and desktop variants.
      files: ['src/App.jsx', 'src/components/**/*.jsx', 'src/contexts/**/*.jsx', 'src/utils/**/*.js'],
      rules: {
        'no-unused-vars': 'off',
        'react/display-name': 'off',
        'react/no-unescaped-entities': 'off',
      },
    },
  ],
};
