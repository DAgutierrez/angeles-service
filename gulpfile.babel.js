import gulp from 'gulp';
import gutil from 'gulp-util';
import path from 'path';
import webpack  from 'webpack';
import serve from 'browser-sync';
import webpackDevMiddelware from 'webpack-dev-middleware';
import webpackHotMiddelware from 'webpack-hot-middleware';
import historyApiFallback from 'connect-history-api-fallback';
import colorsSupported from 'supports-color';
import del from 'del';

let root = 'app';


let paths = {
  entry  : path.join(__dirname, root, 'index.js')
};


gulp.task('serve', () => {

  const config = require(path.join(__dirname, '/config/webpack.dev.config'));

  config.entry.app = [
    // this modules required to make HRM working
    // it responsible for all this webpack magic
    'webpack-hot-middleware/client?reload=true',
    // application entry point
    paths.entry
  ];

  var compiler = webpack(config);

  serve({
    port   : process.env.PORT || 3000,
    open   : true,
    server : {baseDir: root},
    middleware: [
      historyApiFallback(),
      webpackDevMiddelware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: config.output.publicPath
      }),
      webpackHotMiddelware(compiler)
    ]
  });
});


gulp.task('dist', cb => {
  const config = require(path.join(__dirname, '/config/webpack.dist.config'));
  config.entry.app = paths.entry;

  webpack(config, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));

    cb();
  });
});
