var gulp = require('gulp');
var tsc = require('gulp-typescript');
var Config = require('./gulpfile.config');
var config = new Config();
var clean = require('gulp-clean');
var del = require('del');

gulp.task('clean', function () {
    var tsGeneratedFiles = [
        './src/lib/**/*.ts(!./src/lib/src/**/*.ts)',
        './src/lib/**/*.js'

    ];

    return gulp.src(tsGeneratedFiles, { read: false })
        .pipe(clean());
});

gulp.task('compile', ['clean'], function () {
    var sourceTsFiles = [
        './src/lib/src/**/*.ts',
        config.libraryTypeScriptDefinitions
    ];

    var tsResult = gulp.src(sourceTsFiles)
        .pipe(tsc(config.tsConfig));

    tsResult.dts.pipe(gulp.dest('./src/lib'));
    return tsResult.js
                    .pipe(gulp.dest('./src/lib'));
});

gulp.task('watch', function () {
    gulp.watch(
        [
            './src/lib/src/**/*.ts',
        ],
        ['clean','compile']);
});

gulp.task('default', ['clean', 'compile', 'watch']);


