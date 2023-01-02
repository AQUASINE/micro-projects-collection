const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/micro-projects-collection/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Berggren Stream Stuff',
    }
  }
})
