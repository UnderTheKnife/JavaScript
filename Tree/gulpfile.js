const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './',
    }
  });
  gulp.watch([
    './js/*.js',
    './**/*.html',
    './**/*.css'])
    .on('change', reload);
});