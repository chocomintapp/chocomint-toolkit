module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    es6: true,
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["plugin:@typescript-eslint/recommended", "prettier", "plugin:import/errors", "plugin:import/typescript"],
  rules: {
    "import/order": ["error", { alphabetize: { order: "asc" } }],
  },
};
