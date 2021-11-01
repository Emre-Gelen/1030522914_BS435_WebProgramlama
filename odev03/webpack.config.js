const path=require("path")
const TerserPlugin = require("terser-webpack-plugin");

module.exports={
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    entry:'./src/kod.jsx',
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