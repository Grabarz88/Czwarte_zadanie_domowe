const path = require ('path');

module.exports ={
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css&/i ,
                use: [
                    'hondlebar-loader',
                    'extract-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ]
    }
};