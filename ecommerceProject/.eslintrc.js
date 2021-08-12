module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   extends: ['standard', 'prettier'],
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
   },
   plugins: ['react', 'only-warn'],
   rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/jsx-props-no-spreading': ['off'],
      semi: [2, 'always'],
      'no-unused-vars': 'off',
      indent: ['error', 3],
   },
};
