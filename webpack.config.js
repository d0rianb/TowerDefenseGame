const path = require('path');

module.exports = {
    entry: './src/app.ts',
    devtool: 'inline-source-map',
    mode: 'development',
    target: 'web',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                publicPath: 'dist/'
            }
        }],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};