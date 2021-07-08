module.exports = {
  "**/*.ts?(x)": () => "npm run type-check",
  "**/*.(ts|js)?(x)": (filenames) => "eslint --fix",
};
