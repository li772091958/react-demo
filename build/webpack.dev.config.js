/**
* webpack develop config
*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const env = require('./env');
const PATHS = require('./paths');
const host = env.devServer.host || 'localhost';
const port = env.devServer.port || 8000;

const autoprefixer = require('autoprefixer');

const config = {
	context: path.resolve(__dirname, '../'),
	devtool: "inline-source-map",
	entry:{
		bundle: [
               'react-hot-loader/patch', 
               'webpack-dev-server/client?http://0.0.0.0:' + port, 
               //'webpack/hot/only-dev-server', 
               './src/index.js'
            ],	
		vendor: ['react', 'react-dom','redux','react-router-dom']
	},
	output: {
		filename: 'js/app.[hash:5].js',
		path: path.resolve(__dirname,'dist'),
		publicPath: '/',
		chunkFilename : 'js/[name].[hash:5].js', // or whatever other format you want.
	},
	module: {
		rules: [
			{
				test:/\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'					
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			},
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ['file-loader?name=image/[hash].[ext]?']
            },
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
				  require.resolve('style-loader'),
				  {
				    loader: require.resolve('css-loader'),
				    options: {
				      importLoaders: 1,
				    },
				  },
				  {
				    loader: require.resolve('postcss-loader'),
				    options: {
				      // Necessary for external CSS imports to work
				      // https://github.com/facebookincubator/create-react-app/issues/2677
				      ident: 'postcss',
				      plugins: () => [
				        require('postcss-flexbugs-fixes'),
				        autoprefixer({
				          browsers: [
				            '>1%',
				            'last 2 versions',
				            'Firefox ESR',
				            'not ie < 9', // React doesn't support IE8 anyway
				          ],
				          // flexbox: 'no-2009',
				        }),
				      ],
				    },
				  },
				  {
				    loader: require.resolve('sass-loader')
				  }
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'react demo',
			template: './src/index.html'
		}),
		new ExtractTextPlugin({
			filename: "css/style.[hash:5].css",
		}),
		new webpack.optimize.CommonsChunkPlugin({
                        names: ['vendor','manifest'],
                        filename: 'js/[name].js'
                    }),
		new webpack.HotModuleReplacementPlugin(), // Enable HMR
		new webpack.NamedModulesPlugin(),
		new OpenBrowserPlugin({ url: `http://${host}:${port}` })
	],
    resolve: {
      alias: {
        '@': PATHS.app
      },
      descriptionFiles: ['package.json'],
      enforceExtension: false,
      extensions: ['.js', '.jsx', '.json']
    },
	devServer: {
		contentBase: path.join(__dirname, "src"),
		port: port,
		host: host,
		hot:true,
		historyApiFallback: true,
        proxy:{
            "/cenuon": {
                target: "http://www.cenuon.com:3000",
                changeOrigin: true,
                pathRewrite: {"^/cenuon" : ""}
            }
        }
	}
}

module.exports = config