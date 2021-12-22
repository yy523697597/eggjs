import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg'

export default (appInfo: EggAppInfo) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const config = {
    security: {
      csrf: {
        enable: false,
      },
    },
    view: {
      mapping: {
        '.ejs': 'ejs',
      },
    },
    ejs: {
      cache: false,
    },
    // session: {
    //   key: 'ethan',
    //   httpOnly: true,
    //   maxAge: 1000 * 60,
    //   renew: true,
    // },
    // middleware: ['counter'],
  } as PowerPartial<EggAppConfig>

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1639380891232_6616'
  config.mysql = {
    app: true, // 是否挂载到app下面
    agent: false, // 是否挂载到代理下面
    client: {
      host: 'localhost', // 数据库地址
      port: '3306', // 端口
      user: 'root', // 用户名
      password: '123456', // 密码
      database: 'test-egg', // 连接的数据库名称
    },
  }

  // add your egg config in here
  config.middleware = ['counter']

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  }
}
