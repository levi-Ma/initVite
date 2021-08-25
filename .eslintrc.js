module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "plugin:prettier/recommended", // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      tsx: true, // 允许解析 JSX
    },
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 禁止使用 var
    "no-var": "error",
    // 语句强制分号结尾
    semi: ["warn", "always"],
    // 使用双引号
    quotes: ["warn", "double"],
    // 缩进风格
    indent: ["warn", 2],
    // 必须使用合法的typeof的值
    "valid-typeof": "warn",
    // 关闭多根节点的校验
    "vue/no-multiple-template-root": "off",
    // 禁止模版中定义的变量未使用
    "vue/no-unused-vars": "error",
  },
};
