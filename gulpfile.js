const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cssmin = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const pkg = require('./package.json');
const header = require('gulp-header');
const autoprefixer = require('autoprefixer');

gulp.task('compile-less', () => {
    const banner = [
    '/*!',
    ' * sheepdog v<%= pkg.version %>',
    ' * Copyright <%= new Date().getFullYear() %> Tencent, Inc.',
    ' * Licensed under the <%= pkg.license %> license',
    ' */',
    ''
  ].join('\n');

  return gulp.src(['pages/**/*.less', 'component/**/*.less'],{base:'.'})
    .pipe(less())
    .pipe(postcss([autoprefixer(['iOS >= 8', 'Android >= 4.1'])]))
    // .pipe(cssmin())   // 对css进行压缩，可根据环境进行处理
    .pipe(header(banner, { pkg: pkg }))
    .pipe(rename((path) => {
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('watch',function(){
  gulp.watch(['pages/**/*.less', 'component/**/*.less'], ['compile-less']);
});

gulp.task('default', ['watch','compile-less']);
