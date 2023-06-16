const { merge } = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')

//delegating shared module management to webpack
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketingModule: 'marketingModule@http://localhost:8081/remoteEntry.js',
            },
            shared: packageJson.dependencies,
        }),
    ],
}

module.exports = merge(commonConfig, devConfig)
