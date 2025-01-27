const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = {
    configureWebpack: () => ({
        entry: `./src/client-entry.js`,
        devtool: 'source-map',
        target: 'web',
        plugins: [
            new VueSSRClientPlugin()
        ]
    }),
    chainWebpack: config => {
      if(process.env.NODE_ENV === 'production') {
        config.plugins.delete('html');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
      }
    }
};