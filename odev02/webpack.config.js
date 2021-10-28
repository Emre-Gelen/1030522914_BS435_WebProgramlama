const path=require("path")
const TerserPlugin = require("terser-webpack-plugin");

module.exports={
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    entry:'./src/kod.js',
    output: {
        filename:"bundle.js",
        path: path.resolve(__dirname,'public'),
        libraryTarget:"var",
        library:"CatFinding"
    },
    devServer:{
        static: './public',
    },
    
}