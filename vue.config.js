module.exports = {
  configureWebpack: {
    devtool: 'eval-source-map',
    externals: {
      AMap: 'window.AMap',
    },
  },
  devServer: {
    open: true,
    proxy: {
      '/api': {
        // target: 'http://47.110.254.132:8005/',
        target: 'http://47.99.56.5:8100',
        // target: 'http://192.168.1.125:8100', // 安武本地
        changeOrange: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
