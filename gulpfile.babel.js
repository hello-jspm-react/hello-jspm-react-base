import gulp from 'gulp';
import run from 'gulp-sequence';

import * as server from './gulp/server';
import * as scripts from './gulp/scripts';

gulp.task('serve:dev', () => { server.serveDev(); });
gulp.task('serve:watch', () => { server.serveWatch(); });

gulp.task('serve', (done) => {
  run(['serve:dev', 'serve:watch'], done);
});

gulp.task('js:dist', () => { scripts.dist(); });
gulp.task('js:systemjs', () => { scripts.systemjs(); });

gulp.task('build', (done) => {
  run(['js:dist', 'js:systemjs'], done);
});
