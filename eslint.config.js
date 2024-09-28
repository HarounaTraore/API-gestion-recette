export default [
  {
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js, **/*db", "!**/eslint.config.js"],
    rules: {
      semi: "error",
    },
  },
];
