module.exports = {
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    browser: true,
    node: true,
    // mocha: true,
    jest: true
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // 自定义你的规则
    'react/no-unstable-nested-components': 'off',
    "react/jsx-curly-brace-presence": ['off', {props: "always", children: "always", "propElementValues": "always"}]
  }
};
