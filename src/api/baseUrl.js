let baseUrl = '' // 本地代理
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://jxcloud.fujingc2o.com/' // 测试环境url
    break
  case 'production':
    baseUrl = 'http://jxcloud.fujingc2o.com/' // 生产环境url
    break
}

export default baseUrl
