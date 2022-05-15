const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index"
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'HappyCow Development',
            template: '/src/index.html'
        })
    ],
    devServer: {
      static: {
          directory: path.resolve(__dirname, 'dist')
      }  
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: path.resolve(__dirname, "src"),
                use: "babel-loader",
                exclude: /(node_modules)/
            }
        ]
    }
}