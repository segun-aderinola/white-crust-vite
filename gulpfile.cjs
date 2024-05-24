const gulp = require('gulp');


// Task to copy HTML files
function copyHtml() {
  return gulp.src(['*.html', '!node_modules/**']) // Source HTML files
    .pipe(gulp.dest('dist'));                    // Destination directory
}

// Task to copy _redirects file
function copyRedirects() {
  return gulp.src('_redirects')  // Source _redirects file
    .pipe(gulp.dest('dist'));    // Destination directory
}

// Default task
exports.default = gulp.series(copyHtml, copyRedirects);
