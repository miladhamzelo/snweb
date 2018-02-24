const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Webpack construye el bundle para Node.js
    // en lugar de hacerlo para el browser
    target: 'node',

    // Definir el root file del server
    entry: './src/index.js',

    // Definir donde se guarda el output donde va a ser generado
    // el bundle
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);