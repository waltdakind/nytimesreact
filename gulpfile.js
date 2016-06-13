/**
 * Created by Walter on 6/13/2016.
 */
// include gulp
var gulp = require('gulp');
// include plug-ins
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var react = require('gulp-react');
var cache = require('gulp-cached');
const babel = require('gulp-babel');
var install = require("gulp-install");
var webpack = require('gulp-webpack');
var nodemon = require('gulp-nodemon');
var sourcemaps = require("gulp-sourcemaps");
// minify new or changed HTML pages
gulp.task('htmlpage', function() {
    var htmlSrc = './*.html',
        htmlDst = './build';

    gulp.src(htmlSrc)
        .pipe(changed(htmlDst))
        .pipe(minifyHTML())
        .pipe(gulp.dest(htmlDst));
});
// JS concat, strip debugging and minify
gulp.task('scripts', function() {
    gulp.src(['./app/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        .pipe(babel())
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('./build/'));
});
var jsFiles = [
    'app/**/*.js',
    '*.js'
];

gulp.task('jshint', function() {
    var stream = gulp.src(jsFiles)
        .pipe(cache('jshint'))
        .pipe(react())
        .on('error', function(err) {
            console.error('JSX ERROR in ' + err.fileName);
            console.error(err.message);
            this.end();
        })
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));

    if (process.env.CI) {
        stream = stream.pipe(jshint.reporter('fail'));
    }

    return stream;
});

gulp.task('jshint-watch', ['jshint'], function(cb){
    console.log('Watching files for changes...');
    gulp.watch(jsFiles, ['jshint']);
});



gulp.task('default', () =>
    gulp.src(jsFiles)
        .pipe(babel({
            presets: ['es2015', 'babel']
        }))
        .pipe(gulp.dest('build'))
);





// default gulp task
gulp.task('default', ['htmlpage', 'scripts', 'jshint'], function() {
});