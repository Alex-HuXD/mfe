const { merge } = require('webpack-merge')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')

//delegating shared module management to webpack
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html',
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketingModule: 'marketingModule@http://localhost:8081/remoteEntry.js',
                authModule: 'authModule@http://localhost:8082/remoteEntry.js',
                dashboardModule: 'dashboardModule@http://localhost:8083/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        }),
    ],
}

module.exports = merge(commonConfig, devConfig)
