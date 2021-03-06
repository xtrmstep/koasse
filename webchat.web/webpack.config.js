const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    output: {
        path: path.resolve(__dirname, "public/dist/"),
        publicPath: "/public/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "/public"),
        port: 5000,
        publicPath: "http://localhost:5000/dist/",
        hotOnly: true
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
