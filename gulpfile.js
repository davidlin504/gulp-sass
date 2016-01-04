var gulp = require('gulp'),
    compass   = require('gulp-compass');
    var webserver = require('gulp-webserver');

gulp.task('compass',function(){
    return gulp.src('./style/scss/*.scss')
        .pipe(compass({
            config_file: './style/scss/config.rb',
            sourcemap: true,
            time: true,
      css: './style/css/',
      sass: './style/scss/',
      style: 'compact' //nested, expanded, compact, compressed
        }))
        .pipe(gulp.dest('./style/css/'));
}); 

gulp.task('watch',function(){
    gulp.watch('./style/scss/*.scss',['compass']);
});



gulp.task('webserver', function() {
  gulp.src('./app/')
    .pipe(webserver({
      port:1234,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('webserver',['webserver']);

gulp.task('default',['compass','watch']);