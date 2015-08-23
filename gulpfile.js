var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    watch = require('gulp-watch'),
    minifyCss = require('gulp-minify-css'),
    minifyJs = require('gulp-uglify'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifyHTML = require('gulp-minify-html');

var paths = {
    scriptsComponents: 'src/components/**/*.js',
    scriptsShared: 'src/shared/**/*.js',
    scripts: 'src/js/**/*.*',
    styles: 'src/less/**/*.*',
    images: 'src/img/**/*.*',
    templatesComponents: 'src/components/**/*.html',
    templatesShared: 'src/shared/**/*.html',
    templates: 'src/templates/**/*.html',
    index: 'src/index.html',
    favicon: 'src/favicon.png',
    bower_fonts: 'src/bower_components/**/*.{ttf,woff,eof,svg}',
};

/**
 * Handle bower components from index
 */
gulp.task('usemin', function() {
    return gulp.src(paths.index)
        .pipe(usemin({
            js: [
              minifyJs(),
              'concat'
            ],
            css: [minifyCss({keepSpecialComments: 0}), 'concat'],
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('favicon', function() {
    return gulp.src(paths.favicon)
        .pipe(gulp.dest('dist/'));
});

/**
 * Copy assets
 */
gulp.task('build-assets', ['copy-bower_fonts']);

gulp.task('copy-bower_fonts', function() {
    return gulp.src(paths.bower_fonts)
        .pipe(rename({
            dirname: '/fonts'
        }))
        .pipe(gulp.dest('dist/lib'));
});

/**
 * Handle custom files
 */
gulp.task('build-custom', ['custom-images', 'custom-js', 'custom-less', 'custom-components-templates', 'custom-shared-templates', 'custom-templates']);

gulp.task('custom-images', function() {
    return gulp.src(paths.images)
        .pipe(gulp.dest('dist/img'));
});

gulp.task('custom-js', function() {
    return gulp.src([paths.scripts, paths.scriptsComponents, paths.scriptsShared])
        .pipe(minifyJs())
        .pipe(concat('dashboard.min.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('custom-less', function() {
    return gulp.src(paths.styles)
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('custom-templates', function() {
    return gulp.src(paths.templates)
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/templates'));
});

gulp.task('custom-components-templates', function() {
    return gulp.src(paths.templatesComponents)
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/components'));
});

gulp.task('custom-shared-templates', function() {
    return gulp.src(paths.templatesShared)
        .pipe(minifyHTML())
        .pipe(gulp.dest('dist/shared'));
});

/**
 * Watch custom files
 */
gulp.task('watch', function() {
    gulp.watch([paths.images], ['custom-images']);
    gulp.watch([paths.styles], ['custom-less']);
    gulp.watch([paths.scriptsComponents], ['custom-js']);
    gulp.watch([paths.scriptsShared], ['custom-js']);
    gulp.watch([paths.scripts], ['custom-js']);
    gulp.watch([paths.templatesComponents], ['custom-components-templates']);
    gulp.watch([paths.templatesShared], ['custom-shared-templates']);
    gulp.watch([paths.templates], ['custom-templates']);
    gulp.watch([paths.index], ['usemin']);
});

/**
 * Gulp tasks
 */
gulp.task('build', ['usemin', 'favicon', 'build-assets', 'build-custom']);
gulp.task('default', ['build', 'watch']);
