const common_config=require('./webpack.common');
const merge=require('webpack-merge');
const webpack=require('webpack');
module.exports=merge(common_config,{
    devServer:{
        contentBase:'dist',
        hot:true,
    },
    mode:'development',
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})