const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '', // on production this will be the domain name
    },
    mode: 'development',
    devServer: {
        // contentBase requires absolute path so using __dirname
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        index: 'index.html',
    },
    resolve: {
        // you can import files without extentions
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                // to read import images in javascript and add that to DOM
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img',
                        },
                    },
                ],
            },
            {
                // to read css in javascript and add that to DOM
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                // to transform scss files
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                // to transform class properties
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
            {
                test: /\.(woff|woff2|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // this will preserver the name and the extension
                            outputPath: 'fonts/', // will be transpile in dist/fonts folder
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                // '**/*' => this is our output.path directory
                '**/*',
                // path.join(process.cwd(), "build/**/*")
                path.join(process.cwd(), 'build/**/*'),
            ],
        }),
        new HtmlWebpackPlugin({
            template: 'index.html', // reference index file
        }),
    ],
};
