'use strict';

var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var exec = require('child_process').exec;

const gulp = require('gulp');
var rename = require("gulp-rename");
var gutil = require("gulp-util");
var webpack = require("webpack");

const ec = require('electron-connect').server.create();

gulp.task("restart",   ()=> { ec.restart() })
gulp.task("reload",    ()=> { ec.reload() })

gulp.task("bundle", function(callback) {
    // run webpack
    webpack(require('./webpack.config.js'),
      function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('default', ['bundle'], function () {
  ec.start();
  gulp.watch(['main/*.**'],                          ['restart']);
  gulp.watch(['main/public/*.**'],                   ['reload']);
  gulp.watch(['src/**/*.**','./webpack.config.js'],  ['bundle']);
});

gulp.task("prep", ()=> {
    rimraf('./dist', function () {
      mkdirp('./dist/main/public', (err)=> {
        if (err) console.error(err)
      });

      frontCode.bundle('>renderer.js')

      gulp.src('main/public/**/*.*', {base: 'main/public/'})
        .pipe(gulp.dest('./dist/main/public'))

      gulp.src('main/runtime.json')
        .pipe(rename("package.json"))
        .pipe(gulp.dest('./dist/'))

     exec('babel main/*.js --out-dir dist',
          (err, stdout, stderr)=> {
              if (err === null) {
                  process.chdir('dist');
                  exec('yarn install',
                      (err, stdout, stderr)=> {
                          console.log(stdout);
                          console.log(stderr);
                  });
              }
              console.log(stdout);
              console.log(stderr);
      });
    });
})
