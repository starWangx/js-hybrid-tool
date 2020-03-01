# hupu-tool (虎扑前端基础工具库)

## 快速使用(Quick Start)

Several options to get up and running:

- Clone the repo: `git@gitlab.hupu.com:foundation-frontend/hupu-tool.git`
- Install with [npm](http://hnpm.hupu.io/#/detail/@hupu/hupu-tool): `npm install @hupu/tool -S`
- Install with [Yarn](http://hnpm.hupu.io/#/detail/@hupu/hupu-tool): `yarn add @hupu/tool`

## API

### Share

```typescript
import { Share } from "@hupu/tool";

// uc or qq浏览器 or safari 分享到 微信、朋友圈、qq、qq空间、新浪
type type = "wx" | "wxline" | "qq" | "qzone" | "sina";
type config = {
  title?: string;
  link?: stirng;
  desc?: string;
  imgUrl?: string;
  fnDoShare?: ()=>any; //分享前的回调
  diyShare:()=>any;//不支持的浏览器定制分享的回调
};
Share.to(type, config);

//配置微信分享信息
type wxConfig = {
  appId: string;
  timestamp: string;
  nonceStr: string;
  signature: string;
  title?: string;
  link?: string;
  desc?: string;
  imgUrl?: string;
};

Share.wxConfig(wxConfig);

```
### Copy

```typescript
import { Copy } from "@hupu/tool";

Copy('copyText',function(result:boolean){

})
```




## 开发规范和流程(Process and Rules of Development)

- `master` 分支为发布分支和开发基准分支

- 开发时需要基于 `master` 分支内容，并创建新分支(git checkout -b _branchName_ origin/master)进行开发

- 安装依赖 `yarn`**(推荐)** 或 `npm i`

- `npm run dev:hash` 运行基于 `HashRouter` 的单页应用

- `npm run dev:browser` 运行基于 `BrowserRouter` 的单页应用

- 开发和检测完毕后，将代码合并至`master`分支, 运行`npm run release`进行测试和版本构建

## License

Copyright (c) 2020 @hupu/frontend

Released under the MIT License
