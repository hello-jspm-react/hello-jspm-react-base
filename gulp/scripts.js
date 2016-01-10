import gulp from 'gulp';
import jspm from 'gulp-jspm-build';

import config from './config';

export function dist() {
  return jspm(
    {
      bundleOptions: {
        minify: true,
        mangle: true
      },
      bundles: [
        { src: config.paths.src.main, dst: config.paths.dist.app }
      ]
    })
    .pipe(gulp.dest(config.paths.dist.js));
}

export function systemjs() {
  return gulp.src(config.paths.src.systemjs)
    .pipe(gulp.dest(config.paths.dist.js));
}
