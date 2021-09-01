# frontend-template-init
8/30/2021
该模板由 @vue/cli 4.5.13 创建并经过了一定初始化。

## 一、基本环境
1. Node.js 14.15.4
2. @vue/cli 4.5.13

## 二、模板详情
1. Babel
2. Webpack
3. Eslint
4. Vue-router
5. Vuex
6. axios
7. dart-sass（用来替代 node-sass，node-sass 仅支持 python 2）
8. postcss ( plugins: amfe-flexible, postcss-pxtorem )
9. ElementUI
10. normalize.css（用来初始化全局 css）

### 一些说明：
1. 生成的项目版本为 Vue 2。
2. node-sass 因为仅支持 python 2，所以更改为 dart-sass。
3. postcss 的两个插件是用来自适应网页左右宽度的，这里为了适应桌面开发的需求，postcss-pxtorem 的 rootValue 设置为 192，如果是移动端，可改为 37.5。（似乎实践证明 PC 端不需要）
4. package.json-bak.json 是含 postcss 及其插件的备份。

## 三、模板目录
1. initial-backup：这个目录用来备份由 @vue/cli 创建的初始文件。
2. public：（点开就知道了）
3. src/assets：静态资源。
4. src/components：组件。
5. src/router：Vue-router 的配置。
6. src/store：Vuex 的配置。
7. src/styles：样式（内含 init.css，用来进一步初始化全局样式）。
8. src/views：视图。
9. src/utils：工具（封装了权限与登录模板 auth.js、AES加密模板 crypt.js、网络请求与路由拦截模板 http.js）。

## 四、项目安装
```
npm install
```

## 五、其他
### 1. 编译并应用于开发环境（热部署）
```
npm run serve
```

### 2. 编译并应用于生产环境
```
npm run build
```

### 3. Lints and fixes files
```
npm run lint
```

### 4. 本项目未配置 vue.config.js，若有需要，请参阅 https://cli.vuejs.org/config/
