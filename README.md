# Vue 3 + Typescript + [Vite](https://cn.vitejs.dev/) + Prettier + ESLint + Tailwind CSS

## 使用 Volar 进行开发

1. 在插件中心搜索 Volar,并停用 Vetur;
2. 使用`<script lang="ts" setup>`语法糖

## 使用 [Prettier](https://prettier.io) 格式代码

1. 在插件中心搜索`Prettier - Code formatter`并安装;
2. 在任意一个文件界面右键，点击`格式化文档的方式`，选择`Prettier - Code formatter`;

## 添加[ESLint](https://eslint.org/)（[Airbnb](https://github.com/airbnb/javascript)）

1. 在插件中心搜索`ESLint`并安装;
2. 新增.vscode文件夹, 新建`setting.json`文件,配置代码`{"editor.codeActionsOnSave": {
"source.fixAll.eslint": true}}`
3. 使用时, 锁定 `package.json` 中 `eslint` 的版本号, 以防止团队其它成员由于版本号的不同而导制提示不一致;

## 添加[tailwindcss](https://www.tailwindcss.cn/docs)
1. 在插件中心搜索`Tailwind CSS IntelliSense`并安装;

## [资料](https://juejin.cn/post/6977611901232480286)
