(function () {
  'use strict';

  var gulp = require('gulp'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    nodemon = require('gulp-nodemon'),
    path = require('path'),
    source = require('vinyl-source-stream'),
    gulpUtil = require('gulp-util'),
    browserify = require('browserify'),
    filePaths = {
      public: 'public/',
      lessfile: './app/styles/**/*.less',
      jadeFiles: './app/**/**/*.jade'
    };

  gulp.task('less', function () {
    gulp.src(filePaths.lessfile)
      .pipe(less({
        paths: [path.join(__dirname, './app/styles')],
        compress: true
      }))
      .pipe(gulp.dest('./public/css'));
  });

  gulp.task('jade', function () {
    gulp.src(filePaths.jadeFiles)
      .pipe(jade())
      .pipe(gulp.dest('./public/'));
  });

  gulp.task('browserify', function () {
    return browserify('./app/app.js')
      .bundle()
      .on('success', gulpUtil.log.bind(gulpUtil, 'App.js bundled'))
      .on('error', gulpUtil.log.bind(gulpUtil, 'And error occured ' +
        'while bundling app'))
      .pipe(source('app.js'))
      .pipe(gulp.dest('./public/js'));
  });

  gulp.task('nodemon', ['less', 'jade', 'browserify'], function () {
    nodemon({
      script: 'index.js',
      ext: 'js jade',
      ignore: ['public/', 'node_modules/']
    })
    .on('restart', ['browserify', 'jade', 'less']);
  });

  gulp.task('default', ['nodemon']);

} ());