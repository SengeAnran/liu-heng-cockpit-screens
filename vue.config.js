module.exports = {
  configureWebpack: {
    externals: {
     AMap: 'window.AMap',
    },
  },
  devServer: {
    open: true,
    proxy: {
      '/app': {
        target: 'http://47.110.254.132:8005/',
        changeOrange: true,
        pathRewrite: { '^/app': '' },
      },
    },
  },
};