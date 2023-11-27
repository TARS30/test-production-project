module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-indent": [2, 2],
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "indent": ["error", 2],
    "@typescript-eslint/no-floating-promises": "warn",
    "react/no-deprecated": 'warn',
    "@typescript-eslint/naming-convention": "off"
},
};
