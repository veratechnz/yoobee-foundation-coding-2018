//Gulp Variables
var gulp = require('gulp');
		sass = require('gulp-sass');
 		livereload = require('gulp-livereload');
 		connect = require('gulp-connect');
 		jshint = require('gulp-jshint');
  	rename = require('gulp-rename');
  	minifyCss = require('gulp-minify-css');
  	webpack = require('webpack-stream');
  	plumber = require('gulp-plumber');
  	pug = require('gulp-pug');

// Webpack integration
gulp.task('webpack', function() {
  return gulp.src('js/custom.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      resolve: {
          alias: {
            vue: 'vue/dist/vue.min.js'
          }
      }
    }))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    // Piping to 2 dirs - root and the html-solution
    .pipe(gulp.dest('./js'))
    .pipe(gulp.dest('./html/js'));
});

// Server Task
gulp.task('serve', function(event) {
    connect.server({
        root: '',
        port: 1988,
        livereload: true
    });
});

// Styles Task
gulp.task('styles', function() {
    gulp.src('scss/custom.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCss())
        // Piping to 2 dirs - root and the html-solution
        .pipe(gulp.dest('./css/'))
        .pipe(gulp.dest('./html/css'))
        .pipe(connect.reload());
});

// Pug Task
gulp.task('pug', function(){
    return gulp.src('pug/*.pug')
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        //.pipe(rename('index.html'))
        // Piping to 2 dirs - root and html
        .pipe(gulp.dest('./html'))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

// JS Lint Task for correcting and monitoring your custom.js
gulp.task('lint', function(){
    gulp.src('js/custom.js')
    .pipe(jshint())
	.pipe(jshint.reporter('default'))
    // Piping to 2 dirs - root and the html-solution
    .pipe(gulp.dest('./html/js'))
	.pipe(connect.reload());
});

// HTML Task
gulp.task('html', function() {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

// Watch task to watch for file changes
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['styles']);
    gulp.watch('./*.html', ['html']);
    gulp.watch('js/*.js', ['lint', 'webpack']);
    gulp.watch(['*.pug', '**/*.pug'], ['pug']);
});

gulp.task('default', ['serve', 'styles', 'html', 'pug', 'watch', 'webpack']);
