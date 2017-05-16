'use strict';

var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var exec = require('child_process').exec;

const gulp = require('gulp');
var rename = require("gulp-rename");
var gutil = require("gulp-util");
var webpack = require("webpack");
var process = require('process');

var port = 20000+process.pid;          // keep this unique

console.log('Starting electron-connect on port: ', port);

const ec = require('electron-connect').server.create({port: port});

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
