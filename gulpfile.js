var gulp = require('gulp');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var path = require('path');

var wiredep = require('wiredep').stream;

gulp.task('inject', function () {
  var js = [
    './public/**/*.js',
    '!./public/bower_components/**/*.js'
  ];

  var css = [
    './public/**/*.css',
    '!./public/bower_components/**/*.css'
  ];

  var options = {
    ignorePath: 'public',
    addRootSlash: false
  };

  var wiredepOptions = {
    directory: 'public/bower_components'
  }

  return gulp.src('./public/index.tpl')
    .pipe(inject(gulp.src(js, {read: false}), options))
    .pipe(inject(gulp.src(css, {read: false}), options))
    .pipe(rename('index.html'))
    .pipe(wiredep(wiredepOptions))
    .pipe(gulp.dest('./public'));

});
