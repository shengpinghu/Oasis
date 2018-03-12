const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base')

module.exports = merge(base, {
	entry: path.join(__dirname, '../src/packages/index.js'),
	output: {
		path: path.join(__dirname, '../lib'),
		filename: 'index.js',
		library: {
			root: 'Oasis',
			amd: 'oasis-ui',
			commonjs: 'oasis-ui'
		},
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	externals: {
		vue: {
			// TODO
			amd: 'vue',
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue'
		}
	},
	devtool: '#source-map',
	resolve: {
		modules: ['node_modules'],	
		extensions: ['.vue', '.js', '.json']
	},
	plugins: [
	]
})
