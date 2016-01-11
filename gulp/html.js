import gulp from 'gulp';
import htmlreplace from 'gulp-html-replace';

import config from './config';

export function dist() {
  return gulp.src(config.paths.src.html)
    .pipe(htmlreplace(config.htmlReplace))
    .pipe(gulp.dest(config.paths.dist.public));
}
