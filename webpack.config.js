import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ESモジュールの__dirnameをエミュレート
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  // エントリーポイント
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
      publicPath: '/',
      watch: true,
    },
    compress: true,
    port: 8080,
    hot: false, // HMRを無効化
    liveReload: true, // ライブリロードを有効化
    open: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: 'warn',
    },
  },
  // モジュール解決の設定を追加
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  // モジュールルールを追加
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
