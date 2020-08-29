# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+


# 依赖
* [egg-shell-decorators](https://cnodejs.org/topic/5b303eb0ac8bc1e1241143ba)
    - 装饰器使用
* egg-helper
    - 自动注入app/helper中文件到ctx.helper上
* base controller 设置
* egg-cors egg-jwt
    * [egg-jw](https://segmentfault.com/a/1190000020416559?utm_source=tag-newest)

* plugin.ts 用来注入插件
* config.ts 配置