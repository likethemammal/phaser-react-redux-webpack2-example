import webpack from 'webpack'

import path from 'path'

const PHASER_DIR = path.join(__dirname, '/node_modules/phaser-ce/');

const plugins = [

]

const config = {

    context: path.resolve(__dirname, './src'),

    entry: {
        app: './index.js',
    },

    output: {
        filename: '[name].bundle.js',
        path:  path.resolve(__dirname, './dist'),
        publicPath: '/public',
    },

    devServer: {
        contentBase: path.resolve(__dirname, './src'),
    },
    devtool: 'source-map',

    resolve: {
        alias: {
            phaser: path.join(PHASER_DIR, 'build/custom/phaser-split.js'),
            pixi: path.join(PHASER_DIR, 'build/custom/pixi.js'),
            p2: path.join(PHASER_DIR, 'build/custom/p2.js'),
        },
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                }],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true },
                    },
                ],
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /pixi\.js/,
                use: [{
                    loader: 'expose-loader',
                    options: 'PIXI',
                }],
            },
            {
                test: /phaser-split\.js$/,
                use: [{
                    loader: 'expose-loader',
                    options: 'Phaser',
                }],
            },
            {
                test: /p2\.js/,
                use: [{
                    loader: 'expose-loader',
                    options: 'p2',
                }],
            },

        ]

    },
    plugins,
}

module.exports = config
