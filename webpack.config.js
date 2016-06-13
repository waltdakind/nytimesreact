var path = require("path");
module.exports = {

    entry: "./app/app.js",

    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    // These are the specific transformations we'll be using.
                    presets: ['react', 'es2015']
                }
            }
        ]
    }

}