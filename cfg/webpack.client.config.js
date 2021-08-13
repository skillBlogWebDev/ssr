const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const isDev = NODE_ENV === 'development';
const isProd = NODE_ENV === 'production';

function setupDevtool() {
    if (isDev) return 'eval';
    if (isProd) return false;
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/client/index.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js'
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader'],
        }]
    },
    devtool: setupDevtool()

}