module.exports = {
    parser: '@babel/eslint-parser',
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['airbnb', 'plugin:react/recommended'],
    parserOptions: {
      requireConfigFile: false,
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
  };
  