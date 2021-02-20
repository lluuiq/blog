const path = require('path')

module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    devServer: {
        proxy: {
            '/x': {
                target: 'https://api.bilibili.com',
                changeOrigin: true
            },
            '/api/github': {
                target: 'https://api.github.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api/github': ''
                }
            }
        }
    }
}
