import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598489839057_1314';

  // add your egg config in here
  config.middleware = [ 'jwtAuth' ];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  // socket.io
  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
    // redis: {
    //   host: '127.0.0.1',
    //   port: 6379,
    // },
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ 'http://localhost:8080' ], // 允许访问接口的白名单
  };
  config.jwt = {
    secret: '123456', // 自定义 token 的加密条件字符串
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '172.16.10.219',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'egg-sequelize-doc-default',
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
