module.exports = {
  configureWebpack: {
    externals: {
      AMap: 'window.AMap',
    },
  },
  devServer: {
    open: true,
    proxy: {
      '/api': {
        // target: 'http://47.110.254.132:8005/',
        target: 'http://192.168.124.46:8100/',
        changeOrange: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
