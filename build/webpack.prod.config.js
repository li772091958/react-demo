/**
* webpack product config
*/
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const autoprefixer = require('autoprefixer');

const PATHS = require('./paths');

const config = {
	context: path.resolve(__dirname, '../src'),
	entry:{
		app: './index.js',
		vendor: ['react', 'react-dom','redux','react-redux','react-router-dom']
	},
	output: {
		filename: 'js/app.[hash:5].js',
		path: path.resolve(__dirname,'../dist'),
		publicPath: '/',
		chunkFilename : 'js/[name].[hash:5].js'
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
				        }),
				      ],
				    },
				  },
				  {
				    loader: require.resolve('sass-loader')
				  }
				]
			},
			{
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    // 'file-loader?hash=sha512&digest=hex&name=image/[hash].[ext]',
                    'url-loader?limit=3000&name=image/[hash:5].[ext]',// 小于3k的使用base64
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "react demo",
			template: './index.html',
			minify:{ 
                removeComments : true,
                collapseWhitespace:true,
                removeAttributeQuotes:true
            }
		}),
		new webpack.optimize.CommonsChunkPlugin({
		    name: 'vendor',
		    filename: 'js/vendor.[hash:5].js',
		}),
		new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false,
          },
          compress: {
            warnings: false
          }
        }),
		new ExtractTextPlugin({
                filename: "css/style.[hash:5].css",
                disable: false,
                allChunks: true
        }),
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: {removeAll: true } },
          canPrint: true
        }),
		new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify('production') 
           }
        })
	],
    resolve: {
      alias: {
        '@': PATHS.app
      },
      descriptionFiles: ['package.json'],
      enforceExtension: false,
      extensions: ['.js', '.jsx', '.json']
    }
}

module.exports = config