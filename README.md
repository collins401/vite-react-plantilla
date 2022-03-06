
## vite-react-plantilla 

结合多个 `umijs` 项目完美迁移至`vite`，及新项目基于 `vite+react` 开发经验，总结踩坑汇集而成的 `Plantilla` 企业级脚手架工程。

## Features
  - ⚡️ Vite 2, React 17.x, Typescript, windicss, pnpm
  - ☁️ vitest 测试框架
  - 🎨 [vite.config.ts](./vite.config.ts) 最优配置
  - [windi.config.ts](./windi.config.ts) 最具效率的`widnicss`配置
  - ⚙️ 统一了代码规法、约束: eslint+prettier+husky+lint-staged+commitizen+changelog
  - `eslint` 规范采用了[eslin-config-alloy](https://www.npmjs.com/package/eslint-config-alloy), 腾讯 AlloyTeam 团队开源产品。其优点是只做逻辑校验，而代码的格式规范完成由`prettier`来完成
  - axios网络请求通用方法封装，集成CancelToken取消请求，进一步降低请求容错机制。
  - 统一封装了svg图标组件，把相关svg文件放入src/aseets/svg文件夹内, 在页面中通过`<SvgIcon type="back" color="red" size="220px" />`即可使用。
  - 提供部分组件通用开发规则
