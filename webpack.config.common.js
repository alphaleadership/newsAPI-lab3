const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'src')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
