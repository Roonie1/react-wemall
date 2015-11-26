/**
 * Created by ronnie on 15/11/20.
 */
var path = require('path');
var node_modules = path.resolve(__dirname,'node_modules');
var pathToReact = path.resolve(node_modules,'react/dist/react.min.js');
var config = {
    entry: [
        path.resolve(__dirname, 'app/main.js')
    ],
    resole:{
        alias:{
            'react':pathToReact
        }
    },
    output:{
        filename:'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ],
    },
};
module.exports=config;