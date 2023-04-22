const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      "/video": {
        target: "https://bdb24c6d-8c19-4f80-8e7e-c9c9f037f131.bspapp.com/", 
        changeOrigin: true,
      },
    },
  },
});
