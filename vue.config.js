module.exports = {
  assetsDir: "static",

  devServer: {
    proxy: {
      "/coperate": {
        target: "http://targetHost.com",
        ws: true,
        changeOrigin: true,
        // https://lvyongbo.gitbooks.io/http-proxy-middleware/content/log-level.html
        logLevel: "debug",
        pathRewrite: {
          "^/coperate": "/coperate",
        },
      },
    },
  },
  // https://cli.vuejs.org/zh/config/#publicpath
  publicPath: "/childHost/",

  configureWebpack: {
    plugins: [],
  },

  // 更细粒度的控制 Vue CLI 内部的 webpack 配置
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          // Provide path to the file with resources
          resources: ["./src/assets/scss/index.scss"],
        })
        .end();
    });

    // chunks 构建策略
    // splitChunks （webpack4 才有）
    // 查看默认的 webpack 版本，https://github.com/vuejs/vue-cli/blob/master/packages/@vue/cli-service/package.json
    config.optimization.splitChunks({
      // cacheGroups: {
      //   // 创建一个 commons chunk，其中包括所有入口（entry points）共享的代码
      //   common: {
      //     name: "common",
      //     chunks: "initial",
      //     minChunks: 2,
      //     maxInitialRequests: 5,
      //     minSize: 0,
      //     priority: 1,
      //     reuseExistingChunk: true
      //   },
      //   vendors: {
      //     name: "chunk-vendors",
      //     test: /[\\/]node_modules[\\/]/,
      //     /**  抽取哪些资源
      //      * @param chunks all； async 异步 按需； initial 默认 */
      //     chunks: "all",
      //     /** 抽取优先级 */
      //     priority: 2,
      //     reuseExistingChunk: true,
      //     enforce: true
      //   },
      //   vant: {
      //     name: "chunk-vant",
      //     test: /[\\/]node_modules[\\/]vant[\\/]/,
      //     chunks: "all",
      //     priority: 3,
      //     reuseExistingChunk: true,
      //     enforce: true
      //   },
      //   videojs: {
      //     name: "chunk-videojs",
      //     test: /[\\/]node_modules[\\/]video.js[\\/]/,
      //     chunks: "all",
      //     priority: 4,
      //     reuseExistingChunk: true,
      //     enforce: true
      //   }
      // }
    });
  },
};
