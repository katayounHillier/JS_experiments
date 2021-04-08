module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["plugin:@shopify/esnext"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  globals: {
    require: "readonly",
    module: "readonly",
  },
  plugins: ["jest"],
  rules: {},
};
