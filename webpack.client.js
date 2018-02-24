const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    // Definir el root file del server
    entry: './src/client/client.js',

    // Definir donde se guarda el output donde va a ser generado
    // el bundle
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);