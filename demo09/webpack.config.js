var webpack = require('webpack');

// 设置开发环境需要执行的代码时，可加入boolean变量
var selfPlugin = new webpack.DefinePlugin({
	_DEV_: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	plugins: [selfPlugin]
};