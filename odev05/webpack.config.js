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
    entry:'./src/client/index.jsx',
    output: {
        filename:"bundle.js",
        path: path.resolve(__dirname,'public'),
    },
    devServer:{
        static: './public',
    },
    
}