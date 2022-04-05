const config = require('./webpack.config');
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(config, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
});
