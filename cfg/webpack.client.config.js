const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development';
const isProd = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

function setupDevtool() {
    if (isDev) return 'eval';
    if (isProd) return false;
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            'react-dom': isDev ? '@hot-loader/react-dom' : 'react-dom',
        }
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
    ],
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/',
    },
    module: {
        rules: [
        {
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: {
                        mode: 'local',
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                }
            }],
            exclude: GLOBAL_CSS_REGEXP
        },
        {
            test: GLOBAL_CSS_REGEXP,
            use: ['style-loader', 'css-loader']
        }
    ]
    },
    devtool: setupDevtool(),
    plugins: !isDev ? [
        new CleanWebpackPlugin(),
        new HotModuleReplacementPlugin(),
    ] : []
}