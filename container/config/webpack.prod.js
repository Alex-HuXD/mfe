const { merge } = require('webpack-merge')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
//delegating shared module management to webpack
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketingModule: `marketingModule@${domain}/marketing/latest/remoteEntry.js`,
                authModule: `authModule@${domain}/auth/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies,
        }),
    ],
}

module.exports = merge(commonConfig, prodConfig)
