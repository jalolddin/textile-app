const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: '',

    pluginOptions: {
      i18n: {
        locale: 'messages',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false,
        enableBridge: false
      }
    }
})
