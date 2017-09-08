var webpack = require('webpack');

// ���ÿ���������Ҫִ�еĴ���ʱ���ɼ���boolean����
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