module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "no-param-reassign":
      ["error", { "props": false }]
  }
};