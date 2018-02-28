const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('styles.css');

const config = {
    // Definir el root file del server
    entry: './src/client/client.js',

    // Definir donde se guarda el output donde va a ser generado
    // el bundle
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [{
            test: /\.s?css$/,
            use: CSSExtract.extract({
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true
                  }
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ]
            })
        }]
    },
    plugins: [
      CSSExtract
    ]
};

module.exports = merge(baseConfig, config);