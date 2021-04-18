module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    node: true,
    es2020: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:import/errors",
    "plugin:import/typescript",
  ],
  rules: {
    "import/order": ["error", { alphabetize: { order: "asc" } }],
  },
};
