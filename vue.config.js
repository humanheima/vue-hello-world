const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    windicss: {
      // WindiCSS 配置选项
      scan: {
        dirs: ['src'],
        exclude: [
          'node_modules',
          '.git',
          'public/**/*',
          '*.template.html',
          'index.html',
        ],
        include: [],
      },
      transformCSS: 'pre',
    },
  },
})

