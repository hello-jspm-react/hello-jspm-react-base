import gulp from 'gulp';
import run from 'gulp-sequence';

import * as server from './gulp/server';

gulp.task('serve:dev', () => { server.serveDev(); });
gulp.task('serve:watch', () => { server.serveWatch(); });

gulp.task('serve', (done) => {
  run(['serve:dev', 'serve:watch'], done);
});
