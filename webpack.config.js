var path = require('path')

module.exports = {
    entry:'./src/main.js',
    output:{filename: 'bundle.js'},
    module:{
        loaders:[
            {
                test: /.js/,
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}