module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    AMap: 'readonly',
    Loca: 'readonly',
    gs: 'readonly',
  },
  rules: {
    curly: ['error', 'all'],
    semi: ['error', 'always'],
    quotes: ['error', 'single', {
      avoidEscape: true,
    }],
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'prefer-const': ['error', {
      destructuring: 'all',
      ignoreReadBeforeAssign: false,
    }],
    'arrow-parens': ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'import/extensions': ['error', 'ignorePackages', {
      vue: 'never',
      js: 'never',
    }],
  },
};
