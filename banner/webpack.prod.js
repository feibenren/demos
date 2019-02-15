const common_config=require('./webpack.common');
const merge=require('webpack-merge');

module.exports=merge(common_config,{
    mode:'production'
})