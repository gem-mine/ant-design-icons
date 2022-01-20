## Why Fork 为什么Fork

一般 @ant-design/icons-svg 不会经常变更

执行以下操作前，如果已经安装过相应依赖，建议先执行 `npm run clean`

1. @ant-design/icons-svg 打包生成 umd 格式
    ```shell
    npm run bootstrap
    npm run icons:generate
    cd ./packages/icons-svg
    npm run build:umd
    ```
2. 将生成的umd，上传到cdn上
- 复制 `./packages/icons-svg/umd` 下的 `umd-x.x.x.js`
- 粘贴到 [common-static-content](http://git.sdp.nd/app-web/common-static-content/-/tree/develop) `asset/fish/font/svg` 下
    ```shell
    npm run upload
    ```
#### feat/original-icons
与 master 保持一致，将 @ant-design/icons-svg 打包生成 umd 格式并上传 cdn
#### feat/japan-icons
与 master 保持一致，替换 `/packages/icons-svg/svg/outlined` 下的五个日本主题 icon，此时需要重新生成 src

```shell
npm run icons:generate
```
同理将 @ant-design/icons-svg 打包生成 umd 格式并上传 cdn

<p align="center">
<img
 width="450px" alt="logo" src="https://user-images.githubusercontent.com/15819224/45196822-c120ff00-b290-11e8-83ca-eb76378f5cc1.png" />
</p>

<p align="center">
⭐ The abstract trees of the Ant Design SVG icons.
</p>

<div align="center">

[![CircleCI status][circleci-image]][circleci-url]
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

[circleci-image]: https://img.shields.io/circleci/build/github/ant-design/ant-design-icons/master?style=flat-square
[circleci-url]: https://circleci.com/gh/ant-design/ant-design-icons
</div>

## Packages
- Vanilla: [@ant-design/icons-svg](./packages/icons-svg) [![NPM version](https://img.shields.io/npm/v/@ant-design/icons-svg.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-svg) [![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons-svg.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-svg)
- React: [@ant-design/icons](./packages/icons-react) [![NPM version](https://img.shields.io/npm/v/@ant-design/icons.svg?style=flat)](https://npmjs.org/package/@ant-design/icons) [![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons.svg?style=flat)](https://npmjs.org/package/@ant-design/icons)
- React Native: [@ant-design/icons-react-native](./packages/icons-react-native) [![NPM version](https://img.shields.io/npm/v/@ant-design/icons-react-native.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-react-native) [![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons-react-native.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-react-native)
- Angular: [@ant-design/icons-angular](./packages/icons-angular) [![NPM version](https://img.shields.io/npm/v/@ant-design/icons-angular.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-angular) [![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons-angular.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-angular)
- Vue: [@ant-design/icons-vue](./packages/icons-vue) [![NPM version](https://img.shields.io/npm/v/@ant-design/icons-vue.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-vue) [![NPM downloads](http://img.shields.io/npm/dm/@ant-design/icons-vue.svg?style=flat)](https://npmjs.org/package/@ant-design/icons-vue)

## Contribution Guides 贡献指南

- @ant-design/icons-svg: [English](./packages/icons-svg/docs/ContributionGuide.md) ｜ [中文](./packages/icons-svg/docs/ContributionGuide.zh-CN.md)


## License

[MIT License](./LICENSE)
