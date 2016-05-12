var gulp            = require("gulp");
var config          = require("/home/dockerfront/config/Configfile.js");
var autoprefixer    = require("gulp-autoprefixer");
var cssClean        = require("gulp-clean-css");
var cssURLVersioner = require("gulp-css-url-versioner");
var cssNano         = require("gulp-cssnano");
var sourceMaps      = require("gulp-sourcemaps");
var stylus          = require("gulp-stylus");
var size            = require("gulp-size");


gulp.task("default", function(){
    gulp.src(config.src)
        .pipe(stylus(config.options))
        .pipe(gulp.dest(config.build));
});

gulp.task("build", function(){
    gulp.src(config.src)
        .pipe(stylus(config.options.stylus))
        .pipe(cssURLVersioner(config.options.cssURLVersioner))
        .pipe(autoprefixer(config.options.autoprefixer))
        .pipe(cssNano())
        .pipe(sourceMaps.init())
        .pipe(cssClean(config.options.cssClean))
        .pipe(sourceMaps.write())
        .pipe(size(config.options.size))
        .pipe(gulp.dest(config.build));
});
