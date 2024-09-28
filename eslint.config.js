export default [
  {
    files: ["/**/*.js"],
    ignores: ["**/*.config.js, **/*db", "!**/eslint.config.js"],
    rules: {
      semi: "error",
    },
  },
];
